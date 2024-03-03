import styled from 'styled-components';

export const SwitchThemeBtnDesktop = styled.button`
  background-color: inherit;
  border: none;
  outline: none;
  position: relative;
  z-index: 101;

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
  box-shadow: inset 1px 1px 2px 0 rgba(0, 0, 0, 0.1);
`;

export const ThemeBtnBall = styled.svg.withConfig({
  shouldForwardProp: (prop) => 'isdark' !== prop,
})`
  width: 26px;
  height: 26px;
  fill: var(--switcher-ball);
  position: absolute;
  top: 0%;
  left: 6%;
  transform: ${(props) =>
    props.isdark === 'dark' ? 'translateX(0)' : 'translateX(76%)'};
  transition: all 400ms ease;
`;
