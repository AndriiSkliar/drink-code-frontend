// @ts-nocheck
import { createSlice, isAnyOf } from '@reduxjs/toolkit';

import { drinksOperations } from './drinksOperations';

const initialState = {
  cocktails: [],
  popularDrinks: [],
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
      .addCase(
        drinksOperations.fetchCocktails.fulfilled,
        (state, { payload }) => {
          state.isLoading = false;
          state.cocktails = payload;
        }
      )
      .addCase(drinksOperations.fetchPopularDrinks.fullfilled, (state, {payload}) => {
        state.isLoading = false;
        state.popularDrinks = payload;
      })
      .addCase(
        drinksOperations.fetchFavoriteCocktails.fulfilled,
        (state, { payload }) => {
          state.isLoading = false;
          state.favoriteCocktails = payload;
        }
      )
      .addCase(drinksOperations.addCocktail.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.cocktails = [...state.cocktails, payload];
        // toast.success(`Now ${payload.name} added`);
      })
      .addCase(
        drinksOperations.deleteOwnCocktail.fulfilled,
        (state, { payload }) => {
          state.isLoading = false;
          state.cocktails = state.cocktails.filter(
            (cocktail) => cocktail._id !== payload._id
          );
          // toast(`❌ ${payload.name} was deleted`);
        }
      )
      .addCase(
        drinksOperations.addToFavorites.fulfilled,
        (state, { payload }) => {
          state.isLoading = false;
          state.cocktails = state.cocktails.filter(
            (cocktail) => cocktail._id !== payload._id
          );
          state.cocktails = [...state.cocktails, payload];
        }
      )
      .addCase(
        drinksOperations.deleteFromFavorites.fulfilled,
        (state, { payload }) => {
          state.isLoading = false;
          state.cocktails = state.cocktails.filter(
            (cocktail) => cocktail._id !== payload._id
          );
          state.cocktails = [...state.cocktails, payload];
        }
      )
      .addMatcher(
        isAnyOf(
          drinksOperations.fetchCocktails.pending,
          drinksOperations.fetchFavoriteCocktails.pending,
          drinksOperations.addCocktail.pending,
          drinksOperations.deleteOwnCocktail.pending,
          drinksOperations.addToFavorites.pending,
          drinksOperations.deleteFromFavorites.pending
        ),
        (state) => {
          state.isLoading = true;
          state.error = null;
        }
      )
      .addMatcher(
        isAnyOf(
          drinksOperations.fetchCocktails.rejected,
          drinksOperations.fetchFavoriteCocktails.rejected,
          drinksOperations.addCocktail.rejected,
          drinksOperations.deleteOwnCocktail.rejected,
          drinksOperations.addToFavorites.rejected,
          drinksOperations.deleteFromFavorites.rejected
        ),
        (state, { payload }) => {
          state.isLoading = false;
          state.error = payload;
        }
      ),
});

export const cocktailsReducer = cocktailsSlice.reducer;
