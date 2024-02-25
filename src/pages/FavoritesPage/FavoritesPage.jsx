import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Title from '../../components/Title/Title';
import DrinkList from '../../components/DrinkList/DrinkList';
import DrinkCard from '../../components/DrinkCard/DrinkCard';
import { StyledDivNotFound } from './FavoritesPage.styled';
import {
  deleteFromFavorites,
  fetchFavoriteCocktails,
} from '../../redux/drinks/drinksOperations';
import { selectFavoriteCocktails } from '../../redux/selectors';
import { NotFoundCocktail } from '../../components/NotFoundDrink/NotFound';

const FavoritesPage = () => {
  const dispatch = useDispatch();

  const cocktails = useSelector(selectFavoriteCocktails);

  useEffect(() => {
    dispatch(fetchFavoriteCocktails());
  }, [dispatch]);

  return (
    <main className="container">
      <Title text={'Favorites'} />
      {cocktails.length === 0 ? (
        <StyledDivNotFound>
          <NotFoundCocktail />
          <p>You haven't added any favorite cocktails yet</p>
        </StyledDivNotFound>
      ) : (
        <DrinkList>
          {cocktails.map((cocktail) => (
            <DrinkCard
              name={cocktail.drink}
              imgUrl={cocktail.drinkThumb}
              description={cocktail.description}
              alcoholic={cocktail.alcoholic}
              id={cocktail._id}
              key={cocktail._id}
            />
          ))}
        </DrinkList>
      )}
    </main>
  );
};

export default FavoritesPage;
