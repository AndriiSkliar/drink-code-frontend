// @ts-nocheck
import {
  NavigationList,
  StyledLink,
  NavItem,
  MobMenuContainer,
} from './MobileMenu.styled';

const MobileMenu = () => {
  return (
    <MobMenuContainer>
      <NavigationList>
        <NavItem>
          <StyledLink to="/">Home</StyledLink>
        </NavItem>
        <NavItem>
          <StyledLink to="/drinks">Drinks</StyledLink>
        </NavItem>
        <NavItem>
          <StyledLink to="/add">Add drink</StyledLink>
        </NavItem>
        <NavItem>
          <StyledLink to="/my">My drinks</StyledLink>
        </NavItem>
        <NavItem>
          <StyledLink to="favorites">Favorites</StyledLink>
        </NavItem>
      </NavigationList>
    </MobMenuContainer>
  );
};

export default MobileMenu;
