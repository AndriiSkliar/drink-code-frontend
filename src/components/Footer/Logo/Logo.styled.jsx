import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ReactComponent as LogoIcon } from '../../../assets/icons/Logo.svg';

export const Icon = styled(LogoIcon)`
  width: 22px;
  height: 22px;
  fill: var(--primary-text-color-footer);
  @media (min-width: 768px) {
    width: 28px;
    height: 28px;
  }
`;

export const IconText = styled.p`
  font-family: 'Manrope' sans-serif;
  font-size: 16px;
  line-height: 1.125;
  font-weight: 600;

  @media (min-width: 768px) {
    font-size: 18px;
  }
`;

export const LogoLink = styled(Link)`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 15px;
  color: var(--primary-text-color-footer);
`;
