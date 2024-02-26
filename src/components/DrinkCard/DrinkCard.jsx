import React from 'react';
import { useDispatch } from 'react-redux';
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
import { deleteFromFavorites } from '../../redux/drinks/drinksOperations';
import sprite from '/src/assets/icons/icons.svg';

const DrinkCard = ({ name, description, alcoholic, imgUrl, id }) => {
  const dispatch = useDispatch();
  const handleDelete = (cocktailId) => {
    dispatch(deleteFromFavorites(cocktailId));
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
        <NavLink to={`/drink/${id}`}>
          <StyledCocktailSeeMore>See more</StyledCocktailSeeMore>
        </NavLink>

        <StyledDeleteButton onClick={() => handleDelete(id)}>
          <svg>
            <use xlinkHref={`${sprite}#icon-trash`}></use>
          </svg>
        </StyledDeleteButton>
      </StyledButtonsWrapper>
    </StyledCocktailWrapper>
  );
};

export default DrinkCard;
