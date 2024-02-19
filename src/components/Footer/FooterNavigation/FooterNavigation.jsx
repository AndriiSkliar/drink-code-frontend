import { FooterNav, FooterNavLink } from './FooterNavigation.styled';
import { useMediaQuery } from 'react-responsive';

export const FooterNavigation = () => {
  const isDesktop = useMediaQuery({ minWidth: 1280 });

  return (
    <FooterNav>
      <FooterNavLink to="/home">Drinks</FooterNavLink>
      <FooterNavLink to="/drinks">Add drink</FooterNavLink>
      <FooterNavLink to="/my">My drinks</FooterNavLink>
      <FooterNavLink to="/favorites">
        {isDesktop ? 'Favorites' : 'Favorites drinks'}
      </FooterNavLink>
    </FooterNav>
  );
};
