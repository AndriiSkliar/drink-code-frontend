import React from 'react';
import { StyledDrinksItem } from './StyledDrinksItem';


const DrinksItem = ({ id, drinkName, img }) => {
  return (
    <StyledDrinksItem>
      <div className="imgContainer">
      <img src={`${img}`} alt={drinkName} className="drinkImg" />
      </div>
      <div className="contentContainer">
      <h3 className="drinkName">{drinkName}</h3>

       {/* //!!! ссылка на страницу с рецептом коктейля */}
      <a href="/drink/:drinkId" className="seeMoreLink">See more</a>
      </div>
    </StyledDrinksItem>
  );
};

export default DrinksItem;
