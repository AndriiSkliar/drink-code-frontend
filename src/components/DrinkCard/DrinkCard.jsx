import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  StyledButtonsWrapper,
  StyledCocktailAlcoholic,
  StyledCocktailDescription,
  StyledCocktailImage,
  StyledCocktailName,
  StyledCocktailSeeMore,
  StyledCocktailWrapper,
  StyledDeleteButton,
} from './DrinkCard.styled';

const DrinkCard = ({
  name,
  description,
  alcoholic,
  imgUrl,
  handleDelete,
  id,
}) => {
  return (
    <StyledCocktailWrapper>
      <StyledCocktailImage src={imgUrl} alt={name} />
      <div>
        <StyledCocktailName>{name}</StyledCocktailName>
        <StyledCocktailAlcoholic>{alcoholic}</StyledCocktailAlcoholic>
      </div>
      <StyledCocktailDescription>{description}</StyledCocktailDescription>
      <StyledButtonsWrapper>
        <NavLink to={`/drink/${id}`}>
          <StyledCocktailSeeMore>See more</StyledCocktailSeeMore>
        </NavLink>

        <StyledDeleteButton onClick={handleDelete}>
          <svg>
            <use xlinkHref="/src/assets/icons/icons.svg#icon-trash"></use>
          </svg>
        </StyledDeleteButton>
      </StyledButtonsWrapper>
    </StyledCocktailWrapper>
  );
};

export default DrinkCard;
