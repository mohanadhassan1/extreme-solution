import React from 'react';
import { render, screen } from '@testing-library/react';
import UserCard from '@/components/UserCard';
import { User } from '@/types/user';

const mockUser: User = {
  id: 1,
  login: 'mohanad',
  avatar_url: 'https://avatar.url',
  html_url: 'https://github.com/mohanad',
  type: 'User',
};

describe('UserCard', () => {
  it('renders user login and type', () => {
    render(<UserCard user={mockUser} isFavorite={false} />);
    expect(screen.getByText('mohanad')).toBeInTheDocument();
    expect(screen.getByText('User')).toBeInTheDocument();
  });

  it('renders Profile link', () => {
    render(<UserCard user={mockUser} isFavorite={false} />);
    expect(screen.getByRole('link', { name: /profile/i })).toHaveAttribute('href', mockUser.html_url);
  });
});
