import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  StyledCocktailImage,
  StyledCocktailImageContainer,
  StyledCocktailName,
  StyledCocktailSeeMore,
  StyledCocktailWrapper,
  StyledDrinkInfo
} from './DrinksItem.styled';

const DrinksItem = ({ id, name, img }) => {
  return (
    <StyledCocktailWrapper>
      <StyledCocktailImageContainer>
      <StyledCocktailImage src={img} alt={name} />
      </StyledCocktailImageContainer>
      <StyledDrinkInfo>
        <StyledCocktailName>{name}</StyledCocktailName>
        <NavLink to={`/drink/${id}`}>
          <StyledCocktailSeeMore>See more</StyledCocktailSeeMore>
        </NavLink>
      </StyledDrinkInfo>
    </StyledCocktailWrapper>
  );
};

export default DrinksItem;
