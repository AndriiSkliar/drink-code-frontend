// @ts-nocheck
import { useEffect, useState } from 'react';
import {
  SwitchThemeBtnDesktop,
  ThemeBtnIcon,
  ThemeBtnBall,
} from './ToggleDesktop.styled';

const ToggleDesktop = () => {
  const [isDark, setIsDark] = useState(localStorage.getItem('theme'));

  const toggleThemeChange = () => {
    if (isDark === 'dark') {
      setIsDark('light');
      localStorage.setItem('theme', 'light');
      document
        .getElementsByTagName('HTML')[0]
        .setAttribute('data-theme', localStorage.getItem('theme'));
    } else {
      setIsDark('dark');
      localStorage.setItem('theme', 'dark');
      document
        .getElementsByTagName('HTML')[0]
        .setAttribute('data-theme', localStorage.getItem('theme'));
    }
  };

  useEffect(() => {
    if (localStorage.getItem('theme')) {
      document.getElementsByTagName('HTML')[0].setAttribute('data-theme', localStorage.getItem('theme'));
    } else {
      setIsDark('dark');
      localStorage.setItem('theme', 'dark');
      document.getElementsByTagName('HTML')[0].setAttribute('data-theme', 'dark');
    }
  }, []);

  return (
    <SwitchThemeBtnDesktop onClick={toggleThemeChange}>
      <ThemeBtnIcon>
        <use xlinkHref="/src/assets/icons.svg#icon-Rectangle"></use>
      </ThemeBtnIcon>
      <ThemeBtnBall isDark={isDark}>
        <use xlinkHref="/src/assets/icons.svg#icon-knob"></use>
      </ThemeBtnBall>
    </SwitchThemeBtnDesktop>
  );
};

export default ToggleDesktop;
