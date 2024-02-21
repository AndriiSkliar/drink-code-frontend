import { createSlice } from '@reduxjs/toolkit';
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'theme',
    storage,
  };
  
  export const themeSlice = createSlice({
    name: 'theme',
    initialState: { color: 'dark' },
    reducers: {
      toggleTheme: (state) => {
        state.color = state.color === 'light' ? 'dark' : 'light';
      },
    },
  });
  
  export const { toggleTheme } = themeSlice.actions;
  export const selectTheme = (state) => state.theme.color;
  
  export const persistedThemeReducer = persistReducer(
    persistConfig,
    themeSlice.reducer,
  );