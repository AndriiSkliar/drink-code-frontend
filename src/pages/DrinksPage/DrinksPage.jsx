import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';

import Pagination from '../../components/Pagination/Pagination';
import SearchBar from '../../components/DrinkSearch/SearchBar/SearchBar';
import SearchSelectCategory from '../../components/DrinkSearch/Select/SearchSelectCategory';
import SearchSelectIngredients from '../../components/DrinkSearch/Select/SearchSelectIngredients';
import Title from '../../components/Title/Title';
import { Loader } from '../../components/Loader/Loader.jsx';
import DrinkList from '../../components/DrinkList/DrinkList';
import DrinksItem from '../../components/DrinkSearch/DrinksList/DrinksItem/DrinksItem';
import { NotFoundCocktail } from '../../components/NotFoundDrink/NotFound';

import { selectDrinksBySearch, selectIsLoadingDrinks } from '../../redux/selectors/drinks.selectors.js';
import { fetchDrinksBySearch } from '../../redux/drinks/drinks.operations.js';
import { SearchingContainer, StyledDivNotFound } from './DrinksPage.styled.js';

const DrinksPage = () => {
  const dispatch = useDispatch();
  const [limit, setLimit] = useState(10);
  const drinks = useSelector(selectDrinksBySearch);
  const isLoading = useSelector(selectIsLoadingDrinks);
  const [searchParams] = useSearchParams();
  const page = searchParams.get('page') || 1;
  const formData = new FormData();
  
  const [drink, setDrink] = useState(""); 
  const [category, setCategory] = useState(""); 
  const [ingredient, setIngredient] = useState("");

  useEffect(() => {
    const screenWidth = window.innerWidth;
    if (screenWidth >= 1280) {
      setLimit(9);
    } else if (screenWidth >= 768) {
      setLimit(8);
    } else {
      setLimit(10);
    }
  }, []);
  
  const totalPages = Math.ceil(drinks.length / limit);
  const startIndex = (page - 1) * limit;
  const endIndex = Math.min(startIndex + limit, drinks.length);
  
  formData.append('drink', drink);
  formData.append('category', category);
  formData.append('ingredient', ingredient);
  formData.append('limit', limit);

  const params = new URLSearchParams();
  formData.forEach((value, key) => {
    params.append(key, value);
  });

  useEffect(() => {
    console.log('limit: ', limit);
    dispatch(fetchDrinksBySearch(params));
  }, [dispatch])

  useEffect(() => {
    if (drink === '' && category === '' && ingredient === '') return;
    
    dispatch(fetchDrinksBySearch(params));
  }, [category, ingredient, drink, dispatch])

  return (
    <main className="container">
      <Title text={'Drinks'} />
      <SearchingContainer>
        <SearchBar setDrink={setDrink}/>
        <SearchSelectCategory setCategory={setCategory}/>
        <SearchSelectIngredients setIngredient={setIngredient}/>
      </SearchingContainer>
      <div className="categoryListsContainer">
        {isLoading && <Loader />}

        {!isLoading && drinks.length < 1 && (
          <StyledDivNotFound>
            <NotFoundCocktail />
            <p>We haven&apos;t found any cocktails. Please try another filters.</p>
          </StyledDivNotFound>
        )}

        {!isLoading && drinks.length > 0 && (
          <DrinkList>
            {drinks.slice(startIndex, endIndex).map((drink) => (
              <DrinksItem
                key={drink._id}
                className="drinksListItem"
                id={drink._id}
                name={drink.drink}
                img={drink.drinkThumb}
              />
            ))}
          </DrinkList>
        )}
      </div>
      {totalPages > 1 && <Pagination pageQuan={totalPages} />}
    </main>
  );
};
export default DrinksPage;
