export interface User {
  id: number;
  login: string;
  avatar_url: string;
  html_url: string;
  type: string;
}

export interface UsersResponse {
  data: User[];
  totalPages: number;
}