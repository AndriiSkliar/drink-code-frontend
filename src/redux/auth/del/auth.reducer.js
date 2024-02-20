import { createAsyncThunk, createSlice, isAnyOf } from '@reduxjs/toolkit';
import axios from 'axios';

export const instance = axios.create({
  baseURL: 'https://drink-code-backend.onrender.com/api',
});

const setToken = (token) => {
  instance.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const signInThunk = createAsyncThunk(
  'auth/signin',
  async (formData, thunkApi) => {
    try {
      const { data } = await instance.post('/auth/signin', formData);
      setToken(data.token);
      return data;
    } catch (err) {
      console.log(err);
      return thunkApi.rejectWithValue(err.message);
    }
  }
);

export const signUpThunk = createAsyncThunk(
  'auth/signup',
  async (formData, thunkApi) => {
    try {
      const { data } = await instance.post('/auth/signup', formData);
      setToken(data.token);
      return data;
    } catch (err) {
      return thunkApi.rejectWithValue(err.message);
    }
  }
);

export const signOutThunk = createAsyncThunk(
  'auth/signout',
  async (_, thunkApi) => {
    try {
      const { data } = await instance.post('/auth/signout');
      return data;
    } catch (err) {
      return thunkApi.rejectWithValue(err.message);
    }
  }
);

// export const refreshThunk = createAsyncThunk(
//   'auth/refresh',
//   async (_, thunkApi) => {
//     try {
//       const state = thunkApi.getState();
//       const token = state.auth.token;
//       setToken(token);
//       const { data } = await instance.get('/users/current');

//       return data;
//     } catch (err) {
//       return thunkApi.rejectWithValue(err.message);
//     }
//   },
//   {
//     condition: (_, thunkApi) => {
//       const state = thunkApi.getState();
//       const token = state.auth.token;
//       if (!token) return false;
//       return true;
//     },
//   }
// );

const initialState = {
  isLoading: false,
  error: null,
  authenticated: false,
  token: null,
  userData: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(signInThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.authenticated = true;
        state.token = payload.token;
        state.userData = payload.user;
      })
      .addCase(signUpThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.authenticated = true;
        state.token = payload.token;
        state.userData = payload.user;
      })
      .addCase(signOutThunk.fulfilled, () => {
        return initialState;
      })
      //   .addCase(refreshThunk.fulfilled, (state, { payload }) => {
      //     state.isLoading = false;
      //     state.authenticated = true;
      //     state.userData = payload;
      //   })

      .addMatcher(
        isAnyOf(
          signInThunk.pending,
          signUpThunk.pending,
          //   refreshThunk.pending,
          signOutThunk.pending
        ),
        (state) => {
          state.isLoading = true;
          state.error = null;
        }
      )
      .addMatcher(
        isAnyOf(
          signInThunk.rejected,
          signUpThunk.rejected,
          //   refreshThunk.rejected,
          signOutThunk.rejected
        ),
        (state, { payload }) => {
          state.isLoading = false;
          state.error = payload;
        }
      ),
});

export const authReducer = authSlice.reducer;
