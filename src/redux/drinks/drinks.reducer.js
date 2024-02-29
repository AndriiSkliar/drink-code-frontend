import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { fetchDrinksBySearch } from './drinks.operations';

const initialState = {
  drinks: [],
  isLoading: false,
  error: null,
};

const drinksSlice = createSlice({
  name: 'drinks',
  initialState,

  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(fetchDrinksBySearch.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.drinks = payload;
      })
      .addMatcher(isAnyOf(fetchDrinksBySearch.pending), (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addMatcher(
        isAnyOf(fetchDrinksBySearch.rejected),
        (state, { payload }) => {
          state.isLoading = false;
          state.error = payload;
        }
      ),
});

export const drinksReducer = drinksSlice.reducer;
