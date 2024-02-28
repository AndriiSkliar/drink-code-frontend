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
  const formData = new FormData();
  const [perPage, setPerPage] = useState(8);
  const [searchParams] = useSearchParams();
  const drinks = useSelector(selectDrinksBySearch);
  const isLoading = useSelector(selectIsLoadingDrinks);
  const page = searchParams.get('page') || 1;

  // State for send request to backend
  const [drink, setDrink] = useState(''); // searchParam from search bar
  const [category, setCategory] = useState(''); //searchParam from category select
  const [ingredient, setIngredient] = useState('');// searchParam from ingredient select
  // ==========================================
  // const dataObj = JSON.stringify({drink, category, ingredient});

  formData.append('drink', drink);
  formData.append('category', category);
  formData.append('ingredient', ingredient);

  const totalPages = Math.ceil(drinks.length / perPage);
  const startIndex = (page - 1) * perPage;
  const endIndex = Math.min(startIndex + perPage, drinks.length);

  useEffect(() => {
    dispatch(fetchDrinksBySearch());
  }, [dispatch])

  useEffect(() => {
    if (drink === "" && category === "" && ingredient === "") return;
    
    dispatch(fetchDrinksBySearch(formData));
  }, [category, ingredient, drink, dispatch])

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;

      const newCocktailsPerPage = screenWidth >= 1200 ? 9 : 8;

      if (newCocktailsPerPage !== perPage) {
        setPerPage(newCocktailsPerPage);
      }
    };

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [perPage, page, drinks]);

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
