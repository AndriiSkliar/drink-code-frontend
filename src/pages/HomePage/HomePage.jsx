import React, { useState, useEffect } from 'react';
import DrinksList from '../../components/DrinksList/DrinksList';
import Hero from '../../components/Hero/Hero';
import { StyledHomePage } from './StyledHomePage';
import { getHomepageDrinks } from '../../api/getHomepageDrinks'; 


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
    }, []); // Пустой массив зависимостей гарантирует, что useEffect выполняется только после монтирования компонента
  
  return (
    <StyledHomePage className='container'>
      <Hero />
      <div className='categoryListsContainer'>
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
      {/* //!! ссылка на страничку Drinks*/}
      <a href="/drinks" className='otherDrinksLink'>Other drinks</a>
    </StyledHomePage>
  );
};

export default HomePage;
