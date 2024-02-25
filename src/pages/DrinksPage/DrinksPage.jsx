import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DrinksList from '../../components/DrinkSearch/DrinksList/DrinksList';
import Pagination from '../../components/Pagination/Pagination';
import SearchBar from '../../components/DrinkSearch/SearchBar/SearchBar';
import SearchSelectCategory from '../../components/DrinkSearch/Select/SearchSelectCategory';
import SearchSelectIngredients from '../../components/DrinkSearch/Select/SearchSelectIngredients';
import { StyledDrinksPage } from './DrinkPage.styled.js';
import { fetchDrinks } from '../../redux/drinks/drinksSearch.js';
import { selectDrinks, selectIsLoading } from '../../redux/selectors';
// import Loader from '../../components/Loader/Loader';

const DrinksPage = () => {
  const dispatch = useDispatch();

  const drinks = useSelector(selectDrinks);
  // const isLoading = useSelector(selectIsLoading);
  console.log(drinks.length);
  useEffect(() => {
    dispatch(fetchDrinks());
  }, [dispatch]);

  return (
    <StyledDrinksPage>
      <h1 className="drinksTitle">Drinks</h1>
      <div className="searchingContainer">
        <SearchBar />
        <SearchSelectCategory />
        <SearchSelectIngredients />
      </div>
      {/* {isLoading && <Loader />} */}
      <div className="categoryListsContainer">
        <DrinksList drinks={drinks} />
      </div>
      <Pagination pageQuan={drinks.length} />
    </StyledDrinksPage>
  );
};
export default DrinksPage;
