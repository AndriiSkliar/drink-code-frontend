import styled from 'styled-components';
import { ReactComponent as SearchIcon } from '../../../assets/icons/search.svg';

export const Icon = styled(SearchIcon)`
  width: 20px;
  height: 20px;
  fill: #f3f3f3;
  @media (min-width: 768px) {
    width: 28px;
    height: 28px;
  }
`;
export const SearchBarStyled = styled.div`
 
  .SearchForm {
    display: flex;
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
    // position: absolute;
    // top: 100px;
    // left: 50 px;
    // display: inline-block;
    // width: 48px;
    // height: 48px;
    bacground-color: transparent;
    opacity: 0;
    // transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
    // cursor: pointer;
    // outline: none;
  }
  .serch-icon{
    fiil; #f3f3f3;
  }
  .SearchForm-button:hover {
    opacity: 1;
  }

  .SearchForm-button-label {
    position: absolute;
    // width: 1px;
    // height: 1px;
    // padding: 0;
    // overflow: hidden;
    // clip: rect(0, 0, 0, 0);
    // white-space: nowrap;
    // clip-path: inset(50%);
    // border: 0;
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
  
  }
   @media (min-width: 768px) {
     .SearchForm {

    max-width: 264px;
    
    
  }
  }

`;
