import styled from "styled-components";

export const SwitchThemeBtn = styled.button`
    background-color: inherit;
    border: none;
    outline: none;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
`

export const ThemeBtnIcon = styled.svg`
    width: 40px;
    height: 20px;
`

export const ThemeBtnBall = styled.svg`
    width: 20px;
    height: 20px;
    fill: var(--background-color);
    position: absolute;
    top: 12%;
    left: 10%;
    /* transform: translateX(110%); */
    transition: all 400ms ease;
`