import React from 'react';
import { render, screen } from '@testing-library/react';
import UsersList from '@/components/UsersList';
import { User } from '@/types/user';

const mockUsers: User[] = [
  {
    id: 1,
    login: 'mohanad',
    avatar_url: 'https://avatar.url',
    html_url: 'https://github.com/mohanad',
    type: 'User',
  },
];

describe('UsersList', () => {
  it('renders user list', () => {
    render(<UsersList users={mockUsers} favorites={[]} />);
    expect(screen.getByText('mohanad')).toBeInTheDocument();
  });

  it('shows no users message', () => {
    render(<UsersList users={[]} favorites={[]} />);
    expect(screen.getByText(/no users found/i)).toBeInTheDocument();
  });
});
