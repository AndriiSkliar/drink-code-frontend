// @ts-nocheck
import sprite from '/src/assets/icons/icons.svg';
import { SvgIcon, LogoLink } from './LogoHeader.styled';

const LogoHeader = () => {
  return (
    <>
      <LogoLink to="/">
        <SvgIcon>
          <use xlinkHref={`${sprite}#icon-Vector`}></use>
        </SvgIcon>
        Drink Master
      </LogoLink>
    </>
  );
};

export default LogoHeader;
