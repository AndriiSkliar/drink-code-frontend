import { MainHeader, MobileBox, NavigationHeader } from './Header.styled';
import { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import BurgerMenuButton from './BurgerMenuButton/BurgerMenuButton';
import LogoHeader from './LogoHeader/LogoHeader';
import UserMenu from './UserMenu/UserMenu';
import MobileMenu from './MobileMenu/MobileMenu';
import ToggleDesktop from './ToggleDesktop/ToggleDesktop';
import NavMenu from './NavMenu/NavMenu';

const HeaderMain = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const isDesktop = useMediaQuery({ minWidth: 1280 });

  useEffect(() => {
   if(typeof window !== "undefined") {
    if(isOpenMenu) {
      window.document.body.style.overflow = "hidden";
    } else {
      window.document.body.style.overflow = "auto";
    }
   }
  }, [isOpenMenu])

  const handleClick = () => setIsOpenMenu(false);

  return (
    <MainHeader>
      <NavigationHeader>
        <LogoHeader handleClick={handleClick}/>
        <NavMenu/>
        <MobileBox>
          <ToggleDesktop isOpenMenu={isOpenMenu} />
          {!isOpenMenu && <UserMenu />}
          <BurgerMenuButton
            isOpenMenu={isOpenMenu}
            setIsOpenMenu={setIsOpenMenu}
          />
        </MobileBox>
        {isOpenMenu && !isDesktop && <MobileMenu handleClick={handleClick}/>}
      </NavigationHeader>
    </MainHeader>
  );
};

export default HeaderMain;
