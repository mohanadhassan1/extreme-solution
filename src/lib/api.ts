import { User, UsersResponse } from '../types/user';

const API_BASE_URL = 'https://api.github.com';

export const fetchUsers = async (page: number = 1, perPage: number = 10): Promise<UsersResponse> => {
  try {
    const response = await fetch(`${API_BASE_URL}/users?since=${(page - 1) * perPage}&per_page=${perPage}`);
    
    if (!response.ok) {
      throw new Error('Failed to fetch users');
    }
    
    const data = await response.json();
    const linkHeader = response.headers.get('link');
    let totalPages = page;
    
    if (linkHeader) {
      const lastLink = linkHeader.split(',').find(link => link.includes('rel="last"'));
      if (lastLink) {
        const lastPageUrl = lastLink.match(/<([^>]+)>/)?.[1];
        if (lastPageUrl) {
          const url = new URL(lastPageUrl);
          const lastPage = url.searchParams.get('since');
          if (lastPage) {
            totalPages = Math.ceil(parseInt(lastPage) / perPage);
          }
        }
      }
    }
    
    return {
      data,
      totalPages: totalPages || page,
    };
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error;
  }
};

export const searchUsers = (users: User[], query: string): User[] => {
  if (!query) return users;
  
  return users.filter(user => 
    user.login.toLowerCase().includes(query.toLowerCase())
  );
};