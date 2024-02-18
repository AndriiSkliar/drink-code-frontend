// @ts-nocheck
import {
  ContainerHeader,
  MainHeader,
  MobileBox,
  NavigationHeader,
} from './Header.styled';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import BurgerMenuButton from './BurgerMenuButton/BurgerMenuButton';
import LogoHeader from './LogoHeader/LogoHeader';
import UserMenu from './UserMenu/UserMenu';
import ToggleTheme from './ToggleTheme/ToggleTheme';
import MobileMenu from './MobileMenu/MobileMenu';
import ToggleDesktop from './ToggleDesktop/ToggleDesktop';
import NavMenu from './NavMenu/NavMenu';

const HeaderMain = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpenMenu(false);
  }, [location.pathname]);

  return (
    <MainHeader>
      <ContainerHeader>
        <NavigationHeader>
          <LogoHeader />
          <NavMenu/>
          <MobileBox>
            <ToggleDesktop />
            {isOpenMenu ? <ToggleTheme /> : <UserMenu />}
            <BurgerMenuButton
              isOpenMenu={isOpenMenu}
              setIsOpenMenu={setIsOpenMenu}
            />
          </MobileBox>
          {isOpenMenu && <MobileMenu />}
        </NavigationHeader>
      </ContainerHeader>
    </MainHeader>
  );
};

export default HeaderMain;
