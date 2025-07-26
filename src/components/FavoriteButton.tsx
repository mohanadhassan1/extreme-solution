import React from 'react';
import { User } from '../types/user';
import { useDispatch } from 'react-redux';
import { addFavorite, removeFavorite } from '@/store/slices/favoritesSlice';
import { Star } from 'lucide-react';

interface FavoriteButtonProps {
  user: User;
  isFavorite: boolean;
}

const FavoriteButton: React.FC<FavoriteButtonProps> = ({ user, isFavorite }) => {
  const dispatch = useDispatch();

  const handleToggleFavorite = () => {
    if (isFavorite) {
      dispatch(removeFavorite(user.id));
    } else {
      dispatch(addFavorite(user));
    }
  };

  return (
    <button
      onClick={handleToggleFavorite}
      className={`p-2 rounded-full ${isFavorite ? 'text-yellow-500' : 'text-gray-400'} hover:text-yellow-500 transition-colors`}
      aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
    >
      <Star
        className="h-5 w-5" 
        fill={isFavorite ? 'currentColor' : 'none'} 
      />
    </button>
  );
};

export default FavoriteButton;