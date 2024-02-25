export const selectCocktails = (state) => state.cocktails.cocktails;
export const selectPopularDrinks = (state) => state.cocktails.popularDrinks;
export const selectFavoriteCocktails = (state) =>
  state.cocktails.favoriteCocktails;
export const selectIsLoading = (state) => state.cocktails.isLoading;
export const selectDrinks = (state) => state.drinks.drinks;
export const selectCategory = (state) => state.drinks.category;
export const selectIngredient = (state) => state.drinks.ingredient;
