import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Title from '../../components/Title/Title';
import DrinkList from '../../components/DrinkList/DrinkList';
import { NotFoundCocktail } from '../../components/NotFoundDrink/NotFound';
import { fetchOwnCoctails } from '../../redux/drinks/cocktails.reducer.js';
import { selectOwnCocktails } from '../../redux/selectors.js';
import { deleteOwnCocktail } from '../../redux/drinks/drinksOperations.js';
import { StyledDivNotFound } from '../FavoritesPage/FavoritesPage.styled.js';

const MyDrinksPage = () => {
  const dispatch = useDispatch();
  const ownCocktails = useSelector(selectOwnCocktails);

  useEffect(() => {
    dispatch(fetchOwnCoctails());
  }, [dispatch]);

  const handleDeleteCocktail = (id) => {
    dispatch(deleteOwnCocktail(id)).then(() => {
      dispatch(fetchOwnCoctails());
    });
  };

  return (
    <main className="container">
      <Title text={'My drinks'} />
      {ownCocktails.length === 0 ? (
        <StyledDivNotFound>
          <NotFoundCocktail />
          <p>You haven't added any favorite cocktails yet</p>
        </StyledDivNotFound>
      ) : (
        <DrinkList>
          {ownCocktails.drinks.map((cocktail) => (
            <div key={cocktail._id}>
              <p>{cocktail.drink}</p>
              <button onClick={() => handleDeleteCocktail(cocktail._id)}>
                Delete
              </button>
            </div>
          ))}
        </DrinkList>
      )}
    </main>
  );
};

export default MyDrinksPage;
