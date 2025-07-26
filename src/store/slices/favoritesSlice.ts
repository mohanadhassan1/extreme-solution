import { createSlice, PayloadAction, Reducer } from '@reduxjs/toolkit';
import { User } from '@/types/user';
import { showToast } from '@/lib/Notifications';
import { TOAST_TYPES } from '@/enums';

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
        showToast(TOAST_TYPES.SUCCESS, `${action.payload.login} added to favorites!`);
      }
    },
    removeFavorite: (state, action: PayloadAction<number>) => {
      const user = state.users.find(u => u.id === action.payload);
      state.users = state.users.filter((user) => user.id !== action.payload);
      if (user) {
        showToast(TOAST_TYPES.INFO, `${user.login} removed from favorites`);
      }
    },
  },
});

export const { addFavorite, removeFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer as Reducer<FavoritesState>;