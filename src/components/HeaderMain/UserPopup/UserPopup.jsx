// @ts-nocheck
import {EditBtn, EditProfileText, PopupContainer, SvgIconEdit, FlexContainer, LogoutBtnPopup} from "./UserPopup.styled"

const UserPopup = () => {

  return (
    <PopupContainer>
       <FlexContainer>
         <EditProfileText>Edit profile</EditProfileText>
         <EditBtn type="button">
          <SvgIconEdit>
            <use xlinkHref="/src/assets/icons.svg#icon-pencil"></use>
          </SvgIconEdit>
         </EditBtn>
       </FlexContainer>
       <LogoutBtnPopup>Log out</LogoutBtnPopup>
    </PopupContainer>
  )
}

export default UserPopup