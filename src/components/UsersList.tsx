import React from 'react';
import { User } from '../types/user';
import UserCard from './UserCard';

interface UsersListProps {
  users: User[];
  favorites: User[];
  showFavoriteButton?: boolean;
}

const UsersList: React.FC<UsersListProps> = ({ 
  users, 
  favorites,
  showFavoriteButton = true 
}) => {
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