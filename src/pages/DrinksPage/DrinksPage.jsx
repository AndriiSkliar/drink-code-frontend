import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DrinksList from '../../components/DrinkSearch/DrinksList/DrinksList';
import Pagination from '../../components/Pagination/Pagination';
import SearchBar from '../../components/DrinkSearch/SearchBar/SearchBar';
import SearchSelectCategory from '../../components/DrinkSearch/Select/SearchSelectCategory';
import SearchSelectIngredients from '../../components/DrinkSearch/Select/SearchSelectIngredients';
import { SearchingContainer, StyledDrinksPage } from './DrinkPage.styled.js';
import { fetchDrinks } from '../../redux/drinks/drinksSearch.js';
import { selectDrinks, selectIsLoading } from '../../redux/selectors';
import Title from '../../components/Title/Title';
import { Loader } from '../../components/Loader/Loader.jsx';
// import Loader from '../../components/Loader/Loader';

const DrinksPage = () => {
  const dispatch = useDispatch();
  let pageQuan = 1;
  const drinks = useSelector(selectDrinks);
  const isLoading = useSelector(selectIsLoading);

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
    <main className="container">
      <Title text={'Drinks'} />
      <SearchingContainer>
        <SearchBar />
        <SearchSelectCategory />
        <SearchSelectIngredients />
      </SearchingContainer>
      {isLoading === true && <Loader />}
      <div className="categoryListsContainer">
        {drinks.length > 0 && <DrinksList drinks={drinks} />}
        {drinks.length < 1 && <alert>Not gound drink for your request</alert>}
        {/* {drinks.length < 1 && <NotFoundDrink />} */}
      </div>
      {pageQuan > 1 && <Pagination pageQuan={pageQuan} />}
    </main>
  );
};
export default DrinksPage;
