import { createAsyncThunk, createSlice, isAnyOf } from '@reduxjs/toolkit';
import axios from 'axios';

export const instance = axios.create({
  baseURL: 'https://drink-code-backend.onrender.com/',
});

const setToken = (token) => {
  instance.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const loginThunk = createAsyncThunk(
  'auth/login',
  async (formData, thunkApi) => {
    try {
      const { data } = await instance.post('/api/auth/signin', formData);
      setToken(data.token);

      return data;
    } catch (err) {
      console.log(err);
      return thunkApi.rejectWithValue(err.message);
    }
  }
);

export const registerThunk = createAsyncThunk(
  'auth/register',
  async (formData, thunkApi) => {
    try {
      const { data } = await instance.post('/api/auth/signup', formData);
      setToken(data.token);

      return data;
    } catch (err) {
      return thunkApi.rejectWithValue(err.message);
    }
  }
);

export const logOutThunk = createAsyncThunk(
  'auth/logOut',
  async (_, thunkApi) => {
    try {
      const { data } = await instance.post('/api/auth/signout');

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
      .addCase(loginThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.authenticated = true;
        state.token = payload.token;
        state.userData = payload.user;
      })
      .addCase(registerThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.authenticated = true;
        state.token = payload.token;
        state.userData = payload.user;
      })
      .addCase(logOutThunk.fulfilled, () => {
        return initialState;
      })
      //   .addCase(refreshThunk.fulfilled, (state, { payload }) => {
      //     state.isLoading = false;
      //     state.authenticated = true;
      //     state.userData = payload;
      //   })

      .addMatcher(
        isAnyOf(
          loginThunk.pending,
          registerThunk.pending,
          //   refreshThunk.pending,
          logOutThunk.pending
        ),
        (state) => {
          state.isLoading = true;
          state.error = null;
        }
      )
      .addMatcher(
        isAnyOf(
          loginThunk.rejected,
          registerThunk.rejected,
          //   refreshThunk.rejected,
          logOutThunk.rejected
        ),
        (state, { payload }) => {
          state.isLoading = false;
          state.error = payload;
        }
      ),
});

export const authReducer = authSlice.reducer;
