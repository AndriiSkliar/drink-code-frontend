import React, { useState, useEffect } from 'react';
import DrinksList from '../../components/DrinkSearch/DrinksList/DrinksList';
import SearchBar from '../../components/DrinkSearch/SearchBar/SearchBar';
import SearchSelectCategory from '../../components/DrinkSearch/Select/SearchSelectCategory';
import SearchSelectIngredients from '../../components/DrinkSearch/Select/SearchSelectIngredients';
import { StyledDrinksPage } from './DrinkPage.styled.js';
import { getDrinksPageDrinks } from '../../api/getDrinksPageDrinks';
// import Loader from '../../components/Loader/Loader';
// // import { SearchByLetter } from '../../api/getSearchDrinksByLetter';
// // import { SearchsByCategory} from '../../api/getSearchDrinksByCategory';
// // import { SearchByIngredients } from '../../api/getSearchDrinksByIngredients';

const DrinksPage = () => {
  const [drinks, setDrinks] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        // setIsLoading(true);
        const data = await getDrinksPageDrinks();
        setDrinks(data);
      } catch (error) {
        console.error('Ошибка при загрузке данных:', error);
      } finally {
        // setIsLoading(false);
      }
    };

    fetchData();
  }, []);
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
        <DrinksList drinks={drinks} title={'Cocktail'} key={'Cocktail'} />
      </div>
    </StyledDrinksPage>
  );
};
export default DrinksPage;
