// @ts-nocheck

import {
  SwitchThemeBtn,
  ThemeBtnBall,
  ThemeBtnIcon,
} from './ToggleTheme.styled';

const ToggleTheme = () => {
  return (
    <SwitchThemeBtn>
      <ThemeBtnIcon>
        <use xlinkHref="/src/assets/icons.svg#icon-Rectangle"></use>
      </ThemeBtnIcon>
      <ThemeBtnBall>
        <use xlinkHref="/src/assets/icons.svg#icon-knob"></use>
      </ThemeBtnBall>
    </SwitchThemeBtn>
  );
};

export default ToggleTheme;
