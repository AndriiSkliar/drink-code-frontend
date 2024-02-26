const selectHomepageDrinks = (state) => state.cocktails.homepageDrinks;
const selectIsLoading = (state) => state.cocktails.isLoading;
const selectError = (state) => state.cocktails.error;
const drinkDetails = (state) => state.cocktails.drinkDetails;

const drinksSelectors = {
  selectHomepageDrinks,
  selectIsLoading,
  selectError,
  drinkDetails,
};

export default drinksSelectors;
