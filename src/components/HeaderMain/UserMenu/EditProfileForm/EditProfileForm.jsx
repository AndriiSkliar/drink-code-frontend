// @ts-nocheck
import { useState } from 'react';
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
  const [editName, setEditName] = useState(false);
  const handleClick = () => setIsEditOpen(false);
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
                src="/src/assets/images/header/default-avatar.png"
                alt="avatar of the user"
                width={80}
                height={80}
              />
              <AddAvatar type="file" name="avatar" id="avatar" />
            </AvatarContainer>
            <LabelChangeName htmlFor="name">
              <ChangeNameInput
                type="text"
                name="name"
                id="name"
                defaultValue="Vladyslav"
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
