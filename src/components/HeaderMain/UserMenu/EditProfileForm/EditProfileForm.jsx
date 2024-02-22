// @ts-nocheck
import { useState } from 'react';
import { useSelector } from 'react-redux';
import authSelectors from '../../../../redux/auth/authSelectors';
import {
  Backdrop,
  BtnClose,
  ModalWindow,
  SvgIconClose,
} from '../LogoutSure/LogoutSure.styled';
import {
  AddAvatar,
  Avatar,
  AvatarContainer,
  ChangeNameInput,
  SaveChangeBtn,
  FormEdit,
  SvgIcon,
  EditNameButton,
  LabelChangeName,
} from './EditProfileForm.styled';

const EditProfileForm = ({ setIsEditOpen }) => {
  const name = useSelector(authSelectors.selectUserName);
  const avatar = useSelector(authSelectors.selectAvatarURL);
  const [editName, setEditName] = useState(false);
  const [imageURL, setImageURL] = useState('');
  const handleClick = () => setIsEditOpen(false);

 const handleUploadAvatar = (e) => {
  const nameOfFile = e.target.files[0];
  const fileURL = URL.createObjectURL(nameOfFile)
  setImageURL(fileURL);
 }

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
          <FormEdit>
            <AvatarContainer>
              <Avatar
                src={imageURL === '' ? avatar : imageURL}
                alt="avatar of the user"
                width={80}
                height={80}
              />
              <AddAvatar type="file" name="avatar" id="avatar" onChange={handleUploadAvatar}/>
            </AvatarContainer>
            <LabelChangeName htmlFor="name">
              <ChangeNameInput
                type="text"
                name="name"
                id="name"
                defaultValue={name}
                readOnly={!editName ? true : false}
              />
              <EditNameButton
                type="button"
                onClick={() => setEditName((prev) => !prev)}
              >
                <SvgIcon>
                  <use xlinkHref="/src/assets/icons/icons.svg#icon-pencil"></use>
                </SvgIcon>
              </EditNameButton>
            </LabelChangeName>
            <SaveChangeBtn type="submit">Save changes</SaveChangeBtn>
          </FormEdit>
        </div>
      </ModalWindow>
    </Backdrop>
  );
};

export default EditProfileForm;
