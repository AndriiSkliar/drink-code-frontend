import styled from 'styled-components';

export const SearchBarStyled = styled.div`
  .SearchForm {
    display: flex;
    align-items: center;
    width: 100%;
    max-width: 400px;
    background-color: #fff;
    border-radius: 3px;
    overflow: hidden;
  }

  .SearchForm-button {
    display: inline-block;
    width: 48px;
    height: 48px;
    border: 0;
    background-image: url('https://image.flaticon.com/icons/svg/149/149852.svg');
    background-size: 40%;
    background-repeat: no-repeat;
    background-position: center;
    opacity: 0.6;
    transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
    cursor: pointer;
    outline: none;
  }

  .SearchForm-button:hover {
    opacity: 1;
  }

  .SearchForm-button-label {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    clip-path: inset(50%);
    border: 0;
  }

  .SearchForm-input {
    display: inline-block;
    width: 100%;
    font: inherit;
    font-size: 20px;
    border: none;
    outline: none;
    padding-left: 4px;
    padding-right: 4px;
  }

  .SearchForm-input::placeholder {
    font: inherit;
    font-size: 18px;
  }
`;
//   display: flex;
//   justify-content: flex-start;
//   align-items: center;
//   margin-left: 40px;
//   margin-right: 40px;
//   gap: 5px;
// `;

// export const SearchButton = styled.button`
//   display: block;
//   padding-bottom: 2px;
//   background-color: transparent;
//   border: none;
//   color: rgba(243, 243, 243, 0.3);
//   font-size: 25px;
