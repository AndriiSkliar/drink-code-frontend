export const selectCocktails = (state) => state.cocktails.cocktails;
export const selectPopularDrinks = (state) => state.cocktails.popularDrinks;
export const selectFavoriteCocktails = (state) =>
  state.cocktails.favoriteCocktails;
export const selectTotalFavorites = (state) => state.cocktails.totalFavorites;
export const selectIsLoading = (state) => state.cocktails.isLoading;
export const selectError = (state) => state.cocktails.error;
