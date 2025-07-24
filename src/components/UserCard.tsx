import React from 'react';
import { User } from '../types/user';
import FavoriteButton from './FavoriteButton';

interface UserCardProps {
  user: User;
  isFavorite: boolean;
}

const UserCard: React.FC<UserCardProps> = ({ user, isFavorite }) => {
  return (
    <div className="flex items-center justify-between p-4 border rounded-lg shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-center space-x-4">
        <img 
          src={user.avatar_url} 
          alt={user.login} 
          className="w-12 h-12 rounded-full"
        />
        <div>
          <h3 className="font-medium text-gray-900 dark:text-gray-100">{user.login}</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">{user.type}</p>
        </div>
      </div>
      <div className="flex items-center space-x-2">
        <a 
          href={user.html_url} 
          target="_blank" 
          rel="noopener noreferrer"
          className="px-3 py-1 text-sm bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
        >
          Profile
        </a>
        <FavoriteButton user={user} isFavorite={isFavorite} />
      </div>
    </div>
  );
};

export default UserCard;