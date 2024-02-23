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

export const ThemeBtnBall = styled.svg.withConfig({
  shouldForwardProp: (prop) => 'isdark' !== prop,
})`
  width: 28px;
  height: 28px;
  fill: var(--background-color);
  position: absolute;
  top: -4%;
  left: 7.4%;
  transform: ${props => props.isdark === "dark" ? "translateX(0)" : "translateX(70%)"};
  transition: all 400ms ease;
`;
