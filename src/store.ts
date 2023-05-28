import { configureStore } from '@reduxjs/toolkit';
import { loggedUserSlice, restaurantsSlice, usersSlice } from './shared/store/slices';

export const store = configureStore(
  {
    reducer: {
      users: usersSlice.reducer,
      restaurants: restaurantsSlice.reducer,
      loggedUser: loggedUserSlice.reducer
    }
  });

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch