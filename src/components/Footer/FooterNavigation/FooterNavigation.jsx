import { FooterNav, FooterNavLink } from './FooterNavigation.styled';

export const FooterNavigation = () => {
  return (
    <FooterNav>
      <FooterNavLink to="/">Drinks</FooterNavLink>
      <FooterNavLink to="/">Add drink</FooterNavLink>
      <FooterNavLink to="/">My drinks</FooterNavLink>
      <FooterNavLink to="/">Favorites drinks</FooterNavLink>
    </FooterNav>
  );
};
