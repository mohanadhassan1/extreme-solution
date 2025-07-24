import React from 'react';
import { User } from '../types/user';
import { useDispatch, useSelector } from 'react-redux';
import { addFavorite, removeFavorite } from '../store/favoritesSlice';
import { RootState } from '../store/store';

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
      {isFavorite ? (
        <span className="text-2xl">★</span>
      ) : (
        <span className="text-2xl">☆</span>
      )}
    </button>
  );
};

export default FavoriteButton;