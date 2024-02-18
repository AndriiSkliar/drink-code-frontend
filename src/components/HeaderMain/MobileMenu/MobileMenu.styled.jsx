// @ts-nocheck
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import bg224 from "../../../assets/img/mob-menu-bg/bg224.png"
import bg223 from "../../../assets/img/mob-menu-bg/bg223.png"
import bg222 from "../../../assets/img/mob-menu-bg/bg222.png"

export const MobMenuContainer = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    padding-top: 35%;
    height: 100dvh;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: url(${bg224}) no-repeat center / cover, url(${bg223}) no-repeat top center / cover, url(${bg222}) no-repeat top left / cover;
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