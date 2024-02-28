import styled from 'styled-components';
import { ReactComponent as SearchIcon } from 'src/assets/icons/search.svg';

export const Icon = styled(SearchIcon)`
  width: 28px;
  height: 28px;

  @media (min-width: 768px) {
    width: 20px;
    height: 20px;
  }
`;

export const StyledSearchButton = styled.button`
  border: none;
  width: 28px;
  height: 28px;
  background: transparent;
  color: #f3f3f3;
  text-align: center;

  @media screen and (min-width: 768px) {
    width: 20px;
    height: 20px;
  }
`;

export const SearchBarStyled = styled.div`
  .SearchForm {
    display: flex;
    padding: 18px;
    align-items: center;
    width: 100%;
    max-width: 335px;
    height: 56px;
    background-color: transparent;
    border: 1px solid #f3f3f3;
    border-radius: 30px;
    overflow: hidden;
  }

  .SearchForm-button {
    background-color: transparent;
    opacity: 0;
    padding: 18px;
  }

  .SearchForm-button:hover {
    opacity: 1;
  }

  .SearchForm-button-label {
    position: absolute;
  }

  .SearchForm-input {
    display: inline-block;
    width: 100%;
    font: inherit;
    color: #f3f3f3;
    font-size: 20px;
    border: none;
    outline: none;
    padding-left: 4px;
    padding-right: 4px;
    background-color: transparent;
  }

  .SearchForm-input::placeholder {
    font: inherit;
    font-size: 18px;
  }

  @media (min-width: 768px) {
    .SearchForm {
      max-width: 264px;
    }
  }
`;
