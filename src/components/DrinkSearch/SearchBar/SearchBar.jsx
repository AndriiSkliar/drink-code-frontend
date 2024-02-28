// @ts-nocheck
import {
  SearchBarStyled,
  Icon,
  StyledSearchButton,
} from './SearchBar.styled.js';

const SearchBar = ({ setDrink }) => {
  const searchByLetter = (event) => {
    event.preventDefault();
    const letterParams = event.currentTarget.elements.searchLetter.value;
    if (letterParams.trim() !== '') {
      setDrink(letterParams);
    }
    event.currentTarget.elements.searchLetter.value = "";
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
