export const selectCocktails = (state) => state.cocktails.cocktails;
export const selectFavoriteCocktails = (state) =>
  state.cocktails.favoriteCocktails;
export const selectIsLoading = (state) => state.cocktails.isLoading;
export const selectOwnCocktails = (state) => state.cocktails.ownCocktails;
