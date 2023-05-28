import { createSlice } from '@reduxjs/toolkit';

export const usersSlice = createSlice(
  {
    name: 'users',
    initialState: [],
    reducers: {
      setUsersList: (state, action) => action.payload
    }
  });

export const restaurantsSlice = createSlice(
  {
    name: 'restaurants',
    initialState: [],
    reducers: {
      setRestaurantsList: (state, action) => action.payload
    }
  }
);


export const loggedUserSlice = createSlice(
  {
    name: 'loggedUser',
    initialState: null,
    reducers: {
      setLoggedUser: (state, action) => action.payload
    }
  }
);

export const {setRestaurantsList} = restaurantsSlice.actions;
export const {setUsersList} = usersSlice.actions;
export const {setLoggedUser} = loggedUserSlice.actions;
