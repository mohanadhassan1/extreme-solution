import React from 'react';
import { User } from '../types/user';
import UserCard from './UserCard';
import Loading from './Loading';

interface UsersListProps {
  users: User[];
  favorites: User[];
  loading?: boolean;
}

const UsersList: React.FC<UsersListProps> = ({ 
  users, 
  favorites,
  loading = false
}) => {
  if (loading) return <Loading />;
  return (
    <div className="space-y-4">
      {users.length === 0 ? (
        <p className="text-center text-gray-500 py-4">No users found</p>
      ) : (
        users.map((user) => (
          <UserCard
            key={user.id}
            user={user}
            isFavorite={favorites.some(fav => fav.id === user.id)}
          />
        ))
      )}
    </div>
  );
};

export default UsersList;