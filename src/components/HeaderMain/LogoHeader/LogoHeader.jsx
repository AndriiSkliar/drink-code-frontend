// @ts-nocheck

import { SvgIcon, LogoLink } from "./LogoHeader.styles"

const LogoHeader = () => {
  return (
    <div>
        <LogoLink>
           <SvgIcon>
            <use xlinkHref="/src/assets/icons/icons.svg#icon-Vector"></use>
           </SvgIcon>
            Drink Master
        </LogoLink>
    </div>
  )
}

export default LogoHeader