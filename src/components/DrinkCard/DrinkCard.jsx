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
import { useDispatch, useSelector } from 'react-redux';
const DrinkCard = ({
  name,
  description,
  alcoholic,
  imgUrl,
  handleDelete,
  cocktailLink,
}) => {
  const dispatch = useDispatch();

  const handleDeleteCocktail = (cocktailId) => {
    dispatch(deleteCocktails(cocktailId));
  };

  return (
    <StyledCocktailWrapper>
      <StyledCocktailImage src={imgUrl} alt={name} />
      <div>
        <StyledCocktailName>{name}</StyledCocktailName>
        <StyledCocktailAlcoholic>{alcoholic}</StyledCocktailAlcoholic>
      </div>
      <StyledCocktailDescription>{description}</StyledCocktailDescription>
      <StyledButtonsWrapper>
        <NavLink to={cocktailLink}>
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
