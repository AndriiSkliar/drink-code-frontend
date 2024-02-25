import { createAsyncThunk, createSlice, isAnyOf } from '@reduxjs/toolkit';
// import { toast } from 'react-toastify';
import { instance } from '../auth/authOperations';

export const fetchCocktails = createAsyncThunk(
  'cocktails/getAll',
  async (_, thunkApi) => {
    try {
      const { data } = await instance.get('/cocktails');

      return data;
    } catch (err) {
      return thunkApi.rejectWithValue(err.message);
    }
  }
);

export const fetchFavoriteCocktails = createAsyncThunk(
  'cocktails/getFavorite',
  async (_, thunkApi) => {
    try {
      const { data } = await instance.get('/api/users/favorites');
      console.log(data);
      return data;
    } catch (err) {
      return thunkApi.rejectWithValue(err.message);
    }
  }
);

export const addCocktails = createAsyncThunk(
  'cocktails/addCocktail',
  async (cocktail, thunkApi) => {
    try {
      const { data } = await instance.post('/cocktails', cocktail);

      return data;
    } catch (err) {
      return thunkApi.rejectWithValue(err.message);
    }
  }
);

export const deleteCocktails = createAsyncThunk(
  'cocktails/deleteCocktail',
  async (cocktailId, thunkApi) => {
    try {
      const { data } = await instance.delete(`/cocktails/${cocktailId}`);

      return data;
    } catch (err) {
      return thunkApi.rejectWithValue(err.message);
    }
  }
);

export const addToFavorite = createAsyncThunk(
  'cocktails/addToFavorite',
  async (cocktail, thunkApi) => {
    try {
      const { data } = await instance.put(
        `/cocktails/${cocktail.id}`,
        cocktail
      );

      return data;
    } catch (err) {
      return thunkApi.rejectWithValue(err.message);
    }
  }
);

export const deleteFromFavorite = createAsyncThunk(
  'cocktails/deleteFromFavorite',
  async (cocktail, thunkApi) => {
    try {
      const { data } = await instance.put(
        `/cocktails/${cocktail.id}`,
        cocktail
      );

      return data;
    } catch (err) {
      return thunkApi.rejectWithValue(err.message);
    }
  }
);

const initialState = {
  cocktails: [],
  ownCocktails: [],
  favoriteCocktails: [],
  isLoading: false,
  error: null,
};

const cocktailsSlice = createSlice({
  name: 'cocktails',
  initialState,

  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(fetchCocktails.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.cocktails = payload;
      })
      .addCase(fetchFavoriteCocktails.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.favoriteCocktails = payload;
      })
      .addCase(addCocktails.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.cocktails = [...state.cocktails, payload];
        // toast.success(`Now ${payload.name} added`);
      })
      .addCase(deleteCocktails.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.cocktails = state.cocktails.filter(
          (cocktail) => cocktail.id !== payload.id
        );
        // toast(`❌ ${payload.name} was deleted`);
      })
      .addCase(addToFavorite.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.cocktails = state.cocktails.filter(
          (cocktail) => cocktail.id !== payload.id
        );
        state.cocktails = [...state.cocktails, payload];
      })
      .addCase(deleteFromFavorite.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.cocktails = state.cocktails.filter(
          (cocktail) => cocktail.id !== payload.id
        );
        state.cocktails = [...state.cocktails, payload];
      })
      .addMatcher(
        isAnyOf(
          fetchCocktails.pending,
          fetchFavoriteCocktails.pending,
          addCocktails.pending,
          deleteCocktails.pending,
          addToFavorite.pending,
          deleteFromFavorite.pending
        ),
        (state) => {
          state.isLoading = true;
          state.error = null;
        }
      )
      .addMatcher(
        isAnyOf(
          fetchCocktails.rejected,
          fetchFavoriteCocktails.rejected,
          addCocktails.rejected,
          deleteCocktails.rejected,
          addToFavorite.rejected,
          deleteFromFavorite.rejected
        ),
        (state, { payload }) => {
          state.isLoading = false;
          state.error = payload;
        }
      ),
});

export const cocktailsReducer = cocktailsSlice.reducer;
