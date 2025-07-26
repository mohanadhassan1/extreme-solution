import favoritesReducer, { addFavorite, removeFavorite } from '@/store/slices/favoritesSlice';
import { User } from '@/types/user';

const mockUser: User = {
  id: 1,
  login: 'mohanad',
  avatar_url: 'https://avatar.url',
  html_url: 'https://github.com/mohanad',
  type: 'User',
};

describe('favoritesSlice', () => {
  it('should add a user to favorites', () => {
    const state = favoritesReducer({ users: [] }, addFavorite(mockUser));
    expect(state.users).toContainEqual(mockUser);
  });

  it('should not add duplicate users', () => {
    const state = favoritesReducer({ users: [mockUser] }, addFavorite(mockUser));
    expect(state.users.length).toBe(1);
  });

  it('should remove a user from favorites', () => {
    const state = favoritesReducer({ users: [mockUser] }, removeFavorite(mockUser.id));
    expect(state.users.length).toBe(0);
  });
});
