import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DrinksList from '../../components/DrinkSearch/DrinksList/DrinksList';
import Pagination from '../../components/Pagination/Pagination';
import SearchBar from '../../components/DrinkSearch/SearchBar/SearchBar';
import SearchSelectCategory from '../../components/DrinkSearch/Select/SearchSelectCategory';
import SearchSelectIngredients from '../../components/DrinkSearch/Select/SearchSelectIngredients';
import { StyledDrinksPage } from './DrinkPage.styled.js';
import { fetchDrinks } from '../../redux/drinks/drinksSearch.js';
import { selectDrinks } from '../../redux/selectors';
// import Loader from '../../components/Loader/Loader';

const DrinksPage = () => {
  const dispatch = useDispatch();
  let pageQuan = 1;
  const drinks = useSelector(selectDrinks);

  // Count pages for pagination
  // const handleCountPage = async () => {
  //   const screenWidth = window.innerWidth;

  //   if (screenWidth >= 1280) {
  //     console.log('drinks.length', drinks.length);
  //     setPageQuan(drinks.length / 9);
  //   } else if (screenWidth >= 768) {
  //     console.log('drinks.length', drinks.length);
  //     setPageQuan(drinks.length / 8);
  //   } else {
  //     setPageQuan(drinks.length / 10);
  //   }
  //   console.log('PageQuan', pageQuan);
  //   return pageQuan;
  // };

  // const isLoading = useSelector(selectIsLoading);
  // console.log(drinks.length / 9);
  useEffect(() => {
    dispatch(fetchDrinks());
  }, [dispatch]);
  // if (drinks.length > 8) {
  // handleCountPage();
  // }
  if (drinks.length > 7) {
    const screenWidth = window.innerWidth;

    if (screenWidth >= 1280) {
      console.log('drinks.length', drinks.length);
      pageQuan = Math.ceil(drinks.length / 9);
    } else if (screenWidth >= 768) {
      console.log('drinks.length', drinks.length);
      pageQuan = Math.ceil(drinks.length / 8);
    } else {
      pageQuan = Math.ceil(drinks.length / 10);
    }
    console.log('PageQuan', pageQuan);
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
        <DrinksList drinks={drinks} />
      </div>
      {pageQuan > 1 && <Pagination pageQuan={pageQuan} />}
    </StyledDrinksPage>
  );
};
export default DrinksPage;
