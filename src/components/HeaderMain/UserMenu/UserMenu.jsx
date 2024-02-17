// @ts-nocheck
import { AvatarImage, BtnUserMenu } from "./UserMenu.styled"


const UserMenu = () => {
  return (
    <BtnUserMenu>
            <AvatarImage src="/src/assets/img/header/default-avatar.png" alt="Avatar by defult" />
        <p>Vladyslav</p>
    </BtnUserMenu>
  )
}

export default UserMenu