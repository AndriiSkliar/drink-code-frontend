import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const LogoLink = styled(NavLink)`
  font-family: 'Manrope', sans-serif;
  font-weight: 600;
  font-size: 16px;
  line-height: 1.125;
  color: var(--primary-text-color);
  display: flex;
  align-items: center;
  column-gap: 8px;
  cursor: pointer;
  z-index: 101;

  @media screen and (min-width: 768px) {
    column-gap: 15px;
  }
`;

export const SvgIcon = styled.svg`
  width: 22px;
  height: 22px;
  fill: var(--primary-text-color);

  @media screen and (min-width: 768px) {
    width: 28px;
    height: 28px;
  }
`;

export const IconText = styled.p`
  font-size: 16px;
  font-weight: 600px;
  color: var(--primary-text-color);

  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`;
