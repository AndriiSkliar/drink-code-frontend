// @ts-nocheck

import { SvgIcon, LogoLink } from "./LogoHeader.styled"

const LogoHeader = () => {
  return (
    <>
        <LogoLink to="/home">
           <SvgIcon>
            <use xlinkHref="/src/assets/icons/icons.svg#icon-Vector"></use>
           </SvgIcon>
            Drink Master
        </LogoLink>
    </>
  )
}

export default LogoHeader