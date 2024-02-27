// @ts-nocheck
import {
  NavigationList,
  StyledLink,
  NavItem,
  MobMenuContainer,
  BackgroundsColores,
  LineMobile,
} from './MobileMenu.styled';

const MobileMenu = ({handleClick}) => {
  return (
    <MobMenuContainer>
      <BackgroundsColores>
        <LineMobile></LineMobile>
        <NavigationList>
          <NavItem>
            <StyledLink to="/home" onClick={handleClick}>Home</StyledLink>
          </NavItem>
          <NavItem>
            <StyledLink to="/drinks" onClick={handleClick}>Drinks</StyledLink>
          </NavItem>
          <NavItem>
            <StyledLink to="/add" onClick={handleClick}>Add drink</StyledLink>
          </NavItem>
          <NavItem>
            <StyledLink to="/my" onClick={handleClick}>My drinks</StyledLink>
          </NavItem>
          <NavItem>
            <StyledLink to="/favorites" onClick={handleClick}>Favorites</StyledLink>
          </NavItem>
        </NavigationList>
      </BackgroundsColores>
    </MobMenuContainer>
  );
};

export default MobileMenu;
