import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DrinksList from '../../components/DrinkSearch/DrinksList/DrinksList';
import Pagination from '../../components/Pagination/Pagination';
import SearchBar from '../../components/DrinkSearch/SearchBar/SearchBar';
import SearchSelectCategory from '../../components/DrinkSearch/Select/SearchSelectCategory';
import SearchSelectIngredients from '../../components/DrinkSearch/Select/SearchSelectIngredients';
import { StyledDrinksPage } from './DrinkPage.styled.js';
import { fetchDrinks } from '../../redux/drinks/drinksSearch.js';
import { selectDrinks } from '../../redux/selectors';
import NotFoundDrink from '../../components/NotFoundDrink/NotFound.jsx';
// import Loader from '../../components/Loader/Loader';

const DrinksPage = () => {
  const dispatch = useDispatch();
  let pageQuan = 1;
  const drinks = useSelector(selectDrinks);

  useEffect(() => {
    dispatch(fetchDrinks());
  }, [dispatch]);

  // Count pages for pagination
  if (drinks.length > 7) {
    const screenWidth = window.innerWidth;

    if (screenWidth >= 1280) {
      pageQuan = Math.ceil(drinks.length / 9);
    } else if (screenWidth >= 768) {
      pageQuan = Math.ceil(drinks.length / 8);
    } else {
      pageQuan = Math.ceil(drinks.length / 10);
    }
  }
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
        {drinks.length > 0 && <DrinksList drinks={drinks} />}
        {drinks.length < 1 && <NotFoundDrink />}
      </div>
      {pageQuan > 1 && <Pagination pageQuan={pageQuan} />}
    </StyledDrinksPage>
  );
};
export default DrinksPage;
