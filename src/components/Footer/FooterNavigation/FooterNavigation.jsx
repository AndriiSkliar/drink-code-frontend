import { FooterNav, FooterNavLink } from './FooterNavigation.styled';
import { useMediaQuery } from 'react-responsive';

export const FooterNavigation = () => {
  const isDesktop = useMediaQuery({ minWidth: 1280 });

  return (
    <FooterNav>
      <FooterNavLink to="/">Drinks</FooterNavLink>
      <FooterNavLink to="/">Add drink</FooterNavLink>
      <FooterNavLink to="/">My drinks</FooterNavLink>
      <FooterNavLink to="/favorites">
        {isDesktop ? 'Favorites' : 'Favorites drinks'}
      </FooterNavLink>
    </FooterNav>
  );
};
