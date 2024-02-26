import { FooterNav, FooterNavLink } from './FooterNavigation.styled';
import { useMediaQuery } from 'react-responsive';

export const FooterNavigation = () => {
  const isDesktop = useMediaQuery({ minWidth: 1280 });

  return (
    <FooterNav>
      <FooterNavLink to="/drinks" onClick={() => window.scrollTo(0, 0)}>
        Drinks
      </FooterNavLink>
      <FooterNavLink to="/add" onClick={() => window.scrollTo(0, 0)}>
        Add drink
      </FooterNavLink>
      <FooterNavLink to="/my" onClick={() => window.scrollTo(0, 0)}>
        My drinks
      </FooterNavLink>
      <FooterNavLink to="/favorites" onClick={() => window.scrollTo(0, 0)}>
        {isDesktop ? 'Favorites' : 'Favorites drinks'}
      </FooterNavLink>
    </FooterNav>
  );
};
