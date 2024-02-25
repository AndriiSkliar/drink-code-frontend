export const selectCocktails = (state) => state.cocktails.cocktails;
export const selectPopularDrinks = (state) => state.cocktails.popularDrinks;
export const selectFavoriteCocktails = (state) =>
  state.cocktails.favoriteCocktails;
export const selectIsLoading = (state) => state.cocktails.isLoading;
export const selectOwnCocktails = (state) => state.cocktails.ownCocktails;
export const selectTotalOwnCocktails = (state) => state.cocktails.totalOwn;
