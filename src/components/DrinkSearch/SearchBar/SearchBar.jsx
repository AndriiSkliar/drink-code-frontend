// import React from 'react';
import { useDispatch } from 'react-redux';
import { fetchDrinksByLetter } from '../../../redux/drinks/drinks.reducer.js';
import { useSearchParams, useLocation } from 'react-router-dom';

import {
  SearchBarStyled,
  Icon,
  StyledSearchButton,
} from './SearchBar.styled.js';

const SearchBar = () => {
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();

  const queryValue = searchParams.get('search');
  console.log(queryValue);

  // const handleKeyDown = (event) => {
  //   if (event.code === 'Enter') {
  //     searchByLetter();
  //   }
  // };
  // window.addEventListener('keydown', handleKeyDown());

  const searchByLetter = (event) => {
    event.preventDefault();

    const letter = event.currentTarget.elements.searchLetter.value;
    console.log(letter);
    setSearchParams({ letter: letter });
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
            min="1"
            max="20"
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
