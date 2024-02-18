// @ts-nocheck
import { SwitchThemeBtnDesktop, ThemeBtnIcon, ThemeBtnBall } from "./ToggleDesktop.styled"


const ToggleDesktop = () => {
  return (
    <SwitchThemeBtnDesktop>
    <ThemeBtnIcon>
      <use xlinkHref="/src/assets/icons.svg#icon-Rectangle"></use>
    </ThemeBtnIcon>
    <ThemeBtnBall>
      <use xlinkHref="/src/assets/icons.svg#icon-knob"></use>
    </ThemeBtnBall>
  </SwitchThemeBtnDesktop>
  )
}

export default ToggleDesktop