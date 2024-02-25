// import React from 'react';
import { useDispatch } from 'react-redux';
import { fetchDrinksByLetter } from '../../../redux/drinks/drinks.reducer.js';

import {
  SearchBarStyled,
  Icon,
  StyledSearchButton,
} from './SearchBar.styled.js';

const SearchBar = () => {
  const dispatch = useDispatch();

  const searchByLetter = (event) => {
    event.preventDefault();

    const letter = event.currentTarget.elements.searchLetter.value;

    // const formData = {
    //   letter: letter,
    // };
    // console.log('data', JSON.stringify(formData));
    dispatch(fetchDrinksByLetter(letter))
      .unwrap()
      .then(() => event.target.reset());
  };
  return (
    <SearchBarStyled>
      <div>
        <form className="SearchForm" onSubmit={searchByLetter}>
          <input
            className="SearchForm-input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Enter the text"
            name="searchLetter"
          />
          <StyledSearchButton type="submit">
            <Icon />
          </StyledSearchButton>
        </form>
      </div>
    </SearchBarStyled>
  );
};

export default SearchBar;
