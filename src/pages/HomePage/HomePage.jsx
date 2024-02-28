import  { useEffect } from 'react';
import DrinksList from '../../components/DrinksList/DrinksList';
import Hero from '../../components/Hero/Hero';
import { StyledHomePage } from './StyledHomePage';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchHomePageDrinks } from '../../redux/auth/drinks/drinksOperations';
import drinksSelectors from '../../redux/auth/drinks/drinkSelectors';
import { Loader } from '../../components/Loader/Loader';

const HomePage = () => {
  const dispatch = useDispatch();
  const drinks = useSelector(drinksSelectors.selectHomepageDrinks);
  const isLoading = useSelector(drinksSelectors.selectIsLoading);
  const error = useSelector(drinksSelectors.selectError);

  useEffect(() => {
    dispatch(fetchHomePageDrinks());
  }, [dispatch]);

  return (
    <StyledHomePage className="container">
      <Hero />
      {isLoading && <Loader />}
      {error && <p>Error: {error}</p>}

      <div className="categoryListsContainer">
        <DrinksList
          drinks={drinks}
          title={'Ordinary Drink'}
          key={'OrdinaryDrink'}
        />
        <DrinksList drinks={drinks} title={'Cocktail'} key={'Cocktail'} />
        <DrinksList drinks={drinks} title={'Shake'} key={'Shake'} />
        <DrinksList
          drinks={drinks}
          title={'Other/Unknown'}
          key={'OtherUnknown'}
        />
      </div>

      <NavLink to="/drinks" className="otherDrinksLink">
        Other drinks
      </NavLink>
    </StyledHomePage>
  );
};

export default HomePage;
