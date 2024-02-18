// @ts-nocheck
import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import {
  SwitchThemeBtnDesktop,
  ThemeBtnIcon,
  ThemeBtnBall,
} from './ToggleDesktop.styled';

const ToggleDesktop = ({isOpenMenu}) => {
  const [isDark, setIsDark] = useState(localStorage.getItem('theme'));
  const isDesktop = useMediaQuery({minWidth: 1280});

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
    <SwitchThemeBtnDesktop onClick={toggleThemeChange} style={isOpenMenu ? {display: 'flex'} : isDesktop ? {display: 'flex'} : {display: 'none'}}>
      <ThemeBtnIcon>
        <use xlinkHref="/src/assets/icons.svg#icon-Rectangle"></use>
      </ThemeBtnIcon>
      <ThemeBtnBall isdark={isDark}>
        <use xlinkHref="/src/assets/icons.svg#icon-knob"></use>
      </ThemeBtnBall>
    </SwitchThemeBtnDesktop>
  );
};

export default ToggleDesktop;
