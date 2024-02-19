import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const FooterNav = styled.nav`
  display: flex;
  gap: 25px;
  flex-direction: column;
  /* justify-content: center;  */

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
  color: #f3f3f3;
  transition: transform 200ms linear;
  &:hover,
  &:focus {
    transform: scale(1.1);
  }
`;
