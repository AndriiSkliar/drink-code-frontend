const selectHomepageDrinks = (state) => state.cocktails.homepageDrinks;
const selectIsLoading = (state) => state.cocktails.isLoading;
const selectError = (state) => state.cocktails.error;

const drinksSelectors = {
  selectHomepageDrinks,
  selectIsLoading,
  selectError,
};

export default drinksSelectors;