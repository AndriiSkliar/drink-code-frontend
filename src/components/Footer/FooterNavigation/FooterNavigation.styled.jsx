import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const FooterNav = styled.nav`
  display: flex;
  gap: 25px;
  flex-direction: column;

  @media (min-width: 768px) {
    gap: 28px;
  }

  @media (min-width: 1280px) {
    gap: 36px;
  }
`;

export const FooterNavLink = styled(NavLink)`
  font-weight: 500;
  line-height: 1.57;
  color: var(--primary-text-color-footer);
  transition: color 250ms linear;

  &:hover,
  &:focus,
  &.active {
    color: var(--footer-nav-hover-color);
  }
`;
