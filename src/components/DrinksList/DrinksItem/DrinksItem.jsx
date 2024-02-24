import React from 'react';
import { StyledDrinksItem } from './StyledDrinksItem';
import { NavLink } from 'react-router-dom';

const DrinksItem = ({ id, drinkName, img }) => {
  return (
    <StyledDrinksItem>

<div className="imgContainer">
  <div className="drinkImgWrapper">
    <img src={`${img}`} alt={drinkName} className="drinkImg" />
  </div>
</div>

      <div className="contentContainer">
        <h3 className="drinkName">{drinkName}</h3>

        {/* Ссылка на страницу с рецептом коктейля */}
        <NavLink to={`/drink/${id}`} className="seeMoreLink">
          See more
        </NavLink>
      </div>
    </StyledDrinksItem>
  );
};

export default DrinksItem;
