import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const MobMenuContainer = styled.div`
    position: absolute;
    top: 25%;
    left: 0;
    width: 100%;
    height: 100dvh;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const NavigationList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  grid-gap: 16px;
`;

export const NavItem = styled.li`
  width: auto;
  margin-bottom: 16px;
`;

export const StyledLink = styled(NavLink)`
  padding: 8px 16px;
  border: 1px solid var(--primary-text-color);
  border-radius: 40px;
  color: var(--primary-text-color);
  text-align: center;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.43;
  transition: all 400ms ease;

  &:active,
  &:hover,
  &:focus {
    background-color: #161f37;
    border: 1px solid #161f37;
    color: white;
  }

  @media screen and (min-width: 768px) {
    line-height: 1.6;
  }
`;