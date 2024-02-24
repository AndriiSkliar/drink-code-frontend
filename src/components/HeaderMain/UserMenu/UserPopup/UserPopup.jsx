// @ts-nocheck
import { useState, useEffect } from "react"
import {EditBtn, EditProfileText, PopupContainer, SvgIconEdit, FlexContainer, LogoutBtnPopup} from "./UserPopup.styled"
import LogoutSure from "../LogoutSure/LogoutSure";
import EditProfileForm from "../EditProfileForm/EditProfileForm";

const UserPopup = ({setUserAvatar, userAvatar, setIsOpenPopupMenu}) => {
  const [isOpenLogout, setIsOpenLogout] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === 'Escape') {
        setIsOpenLogout(false);
        setIsEditOpen(false);
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
         <EditBtn type="button" onClick={() => setIsEditOpen(true)}>
         <EditProfileText>Edit profile</EditProfileText>
          <SvgIconEdit>
            <use xlinkHref="/src/assets/icons/icons.svg#icon-pencil"></use>
          </SvgIconEdit>
         </EditBtn>
       </FlexContainer>
       <LogoutBtnPopup onClick={() => setIsOpenLogout(prev => !prev)}>Log out</LogoutBtnPopup>
       {isEditOpen && <EditProfileForm setIsEditOpen={setIsEditOpen} setUserAvatar={setUserAvatar} userAvatar={userAvatar} setIsOpenPopupMenu={setIsOpenPopupMenu}/>}
       {isOpenLogout && <LogoutSure setIsOpenLogout={setIsOpenLogout}/>}
    </PopupContainer>
  )
}

export default UserPopup