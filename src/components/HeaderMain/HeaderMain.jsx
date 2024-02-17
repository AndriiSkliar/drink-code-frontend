// @ts-nocheck
import { MainHeader, NavigationHeader } from './Header.styled';
import BurgerMenuButton from './BurgerMenuButton/BurgerMenuButton';
import LogoHeader from './LogoHeader/LogoHeader';
import UserMenu from './UserMenu/UserMenu';

const HeaderMain = () => {
  return (
    <MainHeader>
      <div className="container">
        <NavigationHeader>
          <LogoHeader />
          <div>
            <UserMenu />
            <BurgerMenuButton />
          </div>
        </NavigationHeader>
      </div>
    </MainHeader>
  );
};

export default HeaderMain;
