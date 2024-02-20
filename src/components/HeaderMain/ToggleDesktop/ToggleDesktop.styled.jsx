// @ts-nocheck
import styled from 'styled-components';

export const SwitchThemeBtnDesktop = styled.button`
  background-color: inherit;
  border: none;
  outline: none;
  position: relative;
  z-index: 2;

  @media screen and (min-width: 1280px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const ThemeBtnIcon = styled.svg`
  width: 40px;
  height: 20px;
  fill: var(--primary-text-color);
`;

export const ThemeBtnBall = styled.svg`
  width: 20px;
  height: 20px;
  fill: var(--background-color);
  position: absolute;
  top: 12%;
  left: 10%;
  transform: ${props => props.isdark === "dark" ? "translateX(0)" : "translateX(100%)"};
  transition: all 400ms ease;
`;
