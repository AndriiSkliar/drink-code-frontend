// @ts-nocheck
import {
  NavigationList,
  StyledLink,
  NavItem,
  MobMenuContainer,
  BackgroundsColores,
} from './MobileMenu.styled';

const MobileMenu = () => {
  return (
    <MobMenuContainer>
      <BackgroundsColores>
        <NavigationList>
          <NavItem>
            <StyledLink to="/home">Home</StyledLink>
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
      </BackgroundsColores>
    </MobMenuContainer>
  );
};

export default MobileMenu;
