import React, { useState, useEffect } from 'react';
import DrinksList from '../../components/DrinksList/DrinksList';
import Hero from '../../components/Hero/Hero';
import { StyledHomePage } from './StyledHomePage';
import { getHomepageDrinks } from '../../api/getHomepageDrinks';
import FollowCursor from '../../components/FollowCursor/FollowCursor';
import { NavLink } from 'react-router-dom';

const HomePage = () => {
  const [drinks, setDrinks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getHomepageDrinks();
        setDrinks(data);
      } catch (error) {
        console.error('Ошибка при загрузке данных:', error);
      }
    };

    fetchData();
  }, []);
  return (
    <StyledHomePage className="container">
      <Hero />
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

      {/* Ссылка на страницу Drinks (там где сортировка, поиск по названию и тд) */}
      <NavLink to="/drinks" className="otherDrinksLink">
        Other drinks
      </NavLink>

      <FollowCursor />
    </StyledHomePage>
  );
};

export default HomePage;
