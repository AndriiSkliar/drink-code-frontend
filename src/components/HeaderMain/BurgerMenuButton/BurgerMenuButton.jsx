// @ts-nocheck

import { BtnBurger, SvgIconBurger } from "./BurgerMenuButton.styled"


const BurgerMenuButton = ({isOpenMenu, setIsOpenMenu}) => {
const toggleBurgerMenu = () => {
    setIsOpenMenu(prev => !prev);
    if(isOpenMenu) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
}

  return (
      <BtnBurger type="button" onClick={toggleBurgerMenu}>
        <SvgIconBurger>
            <use xlinkHref={isOpenMenu ? "/src/assets/icons.svg#icon-close" : "/src/assets/icons.svg#icon-menu-burger"}></use>
        </SvgIconBurger>
      </BtnBurger>
  )
}

export default BurgerMenuButton