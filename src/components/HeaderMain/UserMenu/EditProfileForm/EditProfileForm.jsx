// @ts-nocheck
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { authOperations } from '../../../../redux/auth/authOperations';
import authSelectors from '../../../../redux/auth/authSelectors';
import { toast } from 'react-toastify';
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

const EditProfileForm = ({ setIsEditOpen, setUserAvatar, userAvatar }) => {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.selectUserName);
  const [editName, setEditName] = useState(false);
  const [imageURL, setImageURL] = useState('');
  const [fileAvatar, setFileAvatar] = useState();
  const [newUserName, setNewUserName] = useState(name);
  const formData = new FormData();
  const handleClick = () => setIsEditOpen(false);

 const handleUploadAvatar = (e) => {
  const nameOfFile = e.target.files[0];
  setFileAvatar(nameOfFile);
  const fileURL = URL.createObjectURL(nameOfFile)
  setImageURL(fileURL);
 }

 const handleChangeUsername = (e) => {
  const newName = e.target.value;
  if (newName === name) {
    return;
  } else {
    setNewUserName(newName);
  }
 }

 const onSubmitChanges = (event) => {
   event.preventDefault();
  if(name !== newUserName) {
    formData.append("name", newUserName);
  } else if (fileAvatar) {
    formData.append("avatarURL", fileAvatar);
  }
   dispatch(authOperations.updateUser(formData)).unwrap().then((res) => {
    setUserAvatar(res.avatarURL);
    setImageURL('');
    toast.success(`Success update`, {
      position: "top-right",
      autoClose: 1500,
    });
  })
  .catch(() => {
    toast.error(`Something went wrong. Try again`, {
      position: "top-right",
      autoClose: 1500,
    });
  });;
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
          <FormEdit onSubmit={onSubmitChanges}>
            <AvatarContainer>
              <Avatar
                src={imageURL === '' ? userAvatar : imageURL}
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
                onChange={handleChangeUsername}
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
