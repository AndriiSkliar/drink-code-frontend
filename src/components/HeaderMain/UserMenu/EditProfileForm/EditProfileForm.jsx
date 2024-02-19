// @ts-nocheck
import {
    Backdrop,
    BtnClose,
    ModalWindow,
    SvgIconClose,
  } from '../LogoutSure/LogoutSure.styled';
import { AddAvatar, Avatar } from './EditProfileForm.styled';

const EditProfileForm = ({setIsEditOpen}) => {
 const handleClick = () => setIsEditOpen(false)
  return (
    <Backdrop>
    <ModalWindow>
      <div>
        <BtnClose type="button" onClick={handleClick}>
          <SvgIconClose>
            <use xlinkHref="/src/assets/icons/icons.svg#icon-close"></use>
          </SvgIconClose>
        </BtnClose>
      </div>
      <div>
        <form>
            <div>
                <Avatar src="/src/assets/images/header/default-avatar.png" alt="avatar of the user" width={80} height={80}/>
                <AddAvatar type="file" name='avatar' id='avatar'/>
            </div>
        </form>
      </div>
     
    </ModalWindow>
  </Backdrop>
  )
}

export default EditProfileForm