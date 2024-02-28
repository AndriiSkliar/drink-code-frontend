const selectHomepageDrinks = (state) => state.cocktails.homepageDrinks;
const selectIsLoading = (state) => state.cocktails.isLoading;
const selectError = (state) => state.cocktails.error;
const drinkDetails = (state) => state.cocktails.drinkDetails;
const selectDrinksBySearch = state => state.cocktails.drinksSearched;

const drinksSelectors = {
  selectHomepageDrinks,
  selectDrinksBySearch,
  selectIsLoading,
  selectError,
  drinkDetails,
};

export default drinksSelectors;
