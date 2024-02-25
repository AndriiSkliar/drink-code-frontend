import React, { useEffect, useState } from 'react';
import DrinksItem from './DrinksItem/DrinksItem';
import { StyledDrinksList } from './StyledDrinksList';

const DrinksList = ({ title, drinks }) => {
  const filteredDrinks = drinks.filter((drink) => drink.category === title);

  const [visibleDrinks, setVisibleDrinks] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth >= 1280) {
        setVisibleDrinks(3);
      } else if (screenWidth >= 768) {
        setVisibleDrinks(2);
      } else {
        setVisibleDrinks(1);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();
    // console.log('drinks in HomePage:', drinks);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  const limitedDrinks = filteredDrinks.slice(0, visibleDrinks);

  return (
    <StyledDrinksList>
      <h2 className="drinksListTitle">{title}</h2>

      <ul className="drinksList">
        {limitedDrinks.map((drink) => (
          <DrinksItem
            key={drink._id}
            className="drinksListItem"
            drinkName={drink.drink}
            img={drink.drinkThumb}
          />
        ))}
      </ul>
    </StyledDrinksList>
  );
};

export default DrinksList;