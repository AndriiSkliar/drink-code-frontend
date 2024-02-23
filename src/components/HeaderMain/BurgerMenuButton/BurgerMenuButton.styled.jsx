import styled from 'styled-components';

export const BtnBurger = styled.button`
  background-color: inherit;
  border: none;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 101;

  @media screen and (min-width: 1280px) {
    display: none;
  }
`;

export const SvgIconBurger = styled.svg`
  width: 32px;
  height: 32px;
  stroke: var(--primary-text-color);
`;
