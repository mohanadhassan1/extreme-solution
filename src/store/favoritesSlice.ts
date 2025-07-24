import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from '../types/user';

interface FavoritesState {
  users: User[];
}

const initialState: FavoritesState = {
  users: [],
};

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addFavorite: (state, action: PayloadAction<User>) => {
      if (!state.users.some((user) => user.id === action.payload.id)) {
        state.users.push(action.payload);
      }
    },
    removeFavorite: (state, action: PayloadAction<number>) => {
      state.users = state.users.filter((user) => user.id !== action.payload);
    },
  },
});

export const { addFavorite, removeFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;