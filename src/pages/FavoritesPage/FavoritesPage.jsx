import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Title from '../../components/Title/Title';
import DrinkList from '../../components/DrinkList/DrinkList';
import DrinkCard from '../../components/DrinkCard/DrinkCard';
import { StyledDivNotFound } from './FavoritesPage.styled';
import {
  deleteFromFavorite,
  fetchFavoriteCocktails,
} from '../../redux/cocktails/cocktails.reducer';
import { selectFavoriteCocktails } from '../../redux/selectors';

const FavoritesPage = () => {
  const dispatch = useDispatch();

  const cocktails = useSelector(selectFavoriteCocktails);

  // useEffect(() => {
  //   dispatch(fetchFavoriteCocktails());
  // }, [dispatch]);

  return (
    <div className="container">
      <Title text={'Favorites'} />
      {cocktails.length === 0 ? (
        <StyledDivNotFound>
          <img
            srcSet="src/assets/images/404Cocktail.png, src/assets/images/404Cocktail2x.png 2x"
            src="src/assets/images/404Cocktail2x.png"
            alt="glass with cocktail"
            width={198}
            height={247}
          />
          <p>You haven't added any favorite cocktails yet</p>
        </StyledDivNotFound>
      ) : (
        <DrinkList>
          <DrinkCard />
        </DrinkList>
      )}
    </div>
  );
};

export default FavoritesPage;
