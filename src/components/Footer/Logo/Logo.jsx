// import { Link } from 'react-router-dom';
import { Icon, IconText, LogoLink } from './Logo.styled';

export const Logo = () => {
  return (
    <LogoLink to="/main" relative="path">
      <Icon />
      <IconText>Drink Master</IconText>
    </LogoLink>
  );
};
