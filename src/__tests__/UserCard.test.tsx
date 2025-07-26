import React from 'react';
import { render, screen } from '../test-utils';
import UserCard from '@/components/UserCard';
import { User } from '@/types/user';

describe('UserCard', () => {
  const mockUser: User = {
    id: 1,
    login: 'testuser',
    avatar_url: 'https://example.com/avatar.jpg',
    html_url: 'https://github.com/testuser',
    type: 'User',
  };

  it('renders user information correctly', () => {
    render(<UserCard user={mockUser} isFavorite={false} />);

    expect(screen.getByText(mockUser.login)).toBeInTheDocument();
    expect(screen.getByText(mockUser.type)).toBeInTheDocument();
    expect(screen.getByRole('img')).toHaveAttribute('src', mockUser.avatar_url);
    expect(screen.getByText('Profile')).toHaveAttribute('href', mockUser.html_url);
  });

  it('shows star outline when not favorite', () => {
    render(<UserCard user={mockUser} isFavorite={false} />);
    expect(screen.getByText('☆')).toBeInTheDocument();
  });

  it('shows filled star when favorite', () => {
    render(<UserCard user={mockUser} isFavorite={true} />);
    expect(screen.getByText('★')).toBeInTheDocument();
  });
});