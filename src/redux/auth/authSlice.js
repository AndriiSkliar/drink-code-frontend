import { createSlice } from '@reduxjs/toolkit';

import { authOperations } from './authOperations';

const initialState = {
  user: { name: '', email: '', birthday: '', avatar: '' },
  token: '',
  isLoggedIn: false,
  isRefreshing: false,
  isSubscribed: false,
  theme: 'dark',
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    toggleTheme(state) {
      state.theme = state.theme === 'light' ? 'dark' : 'light';
    },
  },
  extraReducers: builder =>
    builder
      .addCase(authOperations.signUp.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isLoggedIn = true;
      })
      .addCase(authOperations.signIn.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isLoggedIn = true;
        console.log(state.token);
      })
      .addCase(authOperations.signOut.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(authOperations.signOut.fulfilled, state => {
        state.user = { name: '', email: '', birthday: '', avatar: '' };
        state.token = '';
        state.isLoggedIn = false;
        state.isRefreshing = false;
      })
      .addCase(authOperations.signOut.rejected, state => {
        state.user = { name: '', email: '', birthday: '', avatar: '' };
        state.token = '';
        state.isLoggedIn = false;
        state.isRefreshing = false;
      })
      .addCase(authOperations.currentUser.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(authOperations.currentUser.fulfilled, (state, action) => {
        // state.theme = payload.user.theme;
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(authOperations.currentUser.rejected, state => {
        state.isRefreshing = false;
      })
      .addCase(authOperations.subscribeEmail.fulfilled, state => {
        state.isSubscribed = true;
      })
      .addCase(authOperations.updateUser.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(authOperations.updateUser.fulfilled, (state, { payload }) => {
        state.user.name = payload.name;
        state.isRefreshing = false;
        payload.avatar && (state.user.avatar = payload.avatar);
      })
      .addCase(authOperations.updateUser.rejected, state => {
        state.isRefreshing = false;
      })
});

export const authReducer = authSlice.reducer;

export const { toggleTheme } = authSlice.actions;