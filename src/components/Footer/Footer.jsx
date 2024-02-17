import {
  FooterContainer,
  Navigation,
  StyledLink,
  IconWrapper,
} from './Footer.styled';
import sprite from 'assets/sprite.svg';

export const Footer = () => {
  return (
    <FooterContainer>
      <div>
        <div>
          <div>
            <Logo />
            <Socials />
          </div>
          <nav>
            <NavLink to="/drinks">Drinks</NavLink>
            <NavLink to="/add">Add recipe</NavLink>
            <NavLink to="/my">My recipes</NavLink>
            <NavLink to="/favorite">Favorites</NavLink>
          </nav>
        </div>
        <SubscribeForm />
      </div>
      <div>
        <Link
          className={css.links}
          to={'https://drink-master-back-end.onrender.com/api-docs/'}
          target="blank"
        >
          ©2023 Drink Master. All rights reserved.
        </Link>
        <div>
          <Link>Privacy Policy</Link>
          <Link>Terms of Service</Link>
        </div>
      </div>
    </FooterContainer>
  );
};
