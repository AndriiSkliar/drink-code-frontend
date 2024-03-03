import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { fetchDrinksBySearch, fetchIngredients } from './drinks.operations';

const initialState = {
  drinks: [],
  category: '',
  ingredients: [], 
    isLoading: false,
  error: null,
};

const drinksSlice = createSlice({
  name: 'drinks',
  initialState,

  reducers: {  },
  extraReducers: (builder) =>
    builder
      .addCase(fetchDrinksBySearch.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.drinks = payload;
      })
      .addCase(fetchIngredients.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.ingredients = payload;
            })
      .addMatcher(isAnyOf(
        fetchDrinksBySearch.pending,
        fetchIngredients.pending
        ), 
        (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addMatcher(
        isAnyOf(fetchDrinksBySearch.rejected,
          fetchIngredients.rejected),
        (state, { payload }) => {
          state.isLoading = false;
          state.error = payload;
        }
      ),
});

export const drinksReducer = drinksSlice.reducer;
