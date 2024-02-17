// @ts-nocheck

import { BtnBurger, SvgIconBurger } from "./BurgerMenuButton.styled"


const BurgerMenuButton = () => {
  return (
      <BtnBurger type="button">
        <SvgIconBurger>
            <use xlinkHref="/src/assets/icons.svg#icon-menu-burger"></use>
        </SvgIconBurger>
      </BtnBurger>
  )
}

export default BurgerMenuButton