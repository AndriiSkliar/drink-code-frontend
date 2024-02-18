// @ts-nocheck
import { useState, useEffect } from "react"
import {EditBtn, EditProfileText, PopupContainer, SvgIconEdit, FlexContainer, LogoutBtnPopup} from "./UserPopup.styled"
import LogoutSure from "../LogoutSure/LogoutSure";

const UserPopup = () => {
  const [isOpenLogout, setIsOpenLogout] = useState(false);

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === 'Escape') {
        setIsOpenLogout(false);
      }
    };

    document.addEventListener('keydown', handleKeyPress);

    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  return (
    <PopupContainer>
       <FlexContainer>
         <EditProfileText>Edit profile</EditProfileText>
         <EditBtn type="button">
          <SvgIconEdit>
            <use xlinkHref="/src/assets/icons/icons.svg#icon-pencil"></use>
          </SvgIconEdit>
         </EditBtn>
       </FlexContainer>
       <LogoutBtnPopup onClick={() => setIsOpenLogout(prev => !prev)}>Log out</LogoutBtnPopup>
       {isOpenLogout && <LogoutSure setIsOpenLogout={setIsOpenLogout}/>}
    </PopupContainer>
  )
}

export default UserPopup