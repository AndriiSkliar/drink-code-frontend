// import { Link } from 'react-router-dom';
import { Icon, IconText, LogoLink } from './Logo.styled';

export const Logo = () => {
  return (
    <LogoLink to="/home" relative="path" onClick={() => window.scrollTo(0, 0)}>
      <Icon />
      <IconText>Drink Master</IconText>
    </LogoLink>
  );
};
