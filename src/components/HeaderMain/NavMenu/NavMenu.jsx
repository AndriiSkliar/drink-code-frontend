// @ts-nocheck
import { NavigationList, NavItem, StyledLink } from "./NavMenu.styled"


const NavMenu = () => {
  return (
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
  )
}

export default NavMenu
