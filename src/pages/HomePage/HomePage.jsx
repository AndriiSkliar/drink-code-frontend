import  { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import DrinksList from '../../components/DrinksList/DrinksList';
import Hero from '../../components/Hero/Hero';
import { Loader } from '../../components/Loader/Loader';
import { StyledHomePage } from './StyledHomePage';
import { selectError, selectHomepageDrinks, selectIsLoading } from '../../redux/selectors/drinks.selectors';
import { fetchHomePageDrinks } from '../../redux/drinks/drinks.operations';

const HomePage = () => {
  const dispatch = useDispatch();
  const drinks = useSelector(selectHomepageDrinks);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

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
