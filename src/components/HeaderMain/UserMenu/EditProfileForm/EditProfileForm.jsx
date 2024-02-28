import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import sprite from '/src/assets/icons/icons.svg';
import {
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
import { selectAvatarURL, selectUserName } from '../../../../redux/selectors/auth.selectors';
import { updateUser } from '../../../../redux/auth/auth.operations';

const EditProfileForm = ({
  setIsEditOpen,
  setUserAvatar,
  userAvatar,
  setIsOpenPopupMenu,
}) => {
  const dispatch = useDispatch();
  const name = useSelector(selectUserName);
  const avatar = useSelector(selectAvatarURL);
  const [editName, setEditName] = useState(false);
  const [imageURL, setImageURL] = useState('');
  const [fileAvatar, setFileAvatar] = useState();
  const [newUserName, setNewUserName] = useState(name);
  const formData = new FormData();
  const handleClick = () => setIsEditOpen(false);

  const handleUploadAvatar = (e) => {
    const nameOfFile = e.target.files[0];
    setFileAvatar(nameOfFile);
    const fileURL = URL.createObjectURL(nameOfFile);
    setImageURL(fileURL);
  };

  const handleChangeUsername = (e) => {
    const newName = e.target.value;
    if (newName === name) {
      return;
    } else {
      setNewUserName(newName);
    }
  };

  const onSubmitChanges = (event) => {
    event.preventDefault();
    if (name !== newUserName) {
      formData.append('name', newUserName);
    } else if (fileAvatar) {
      formData.append('avatarURL', fileAvatar);
    }
    dispatch(updateUser(formData))
      .unwrap()
      .then((res) => {
        setUserAvatar(res.avatarURL);
        setImageURL('');
        toast.success(`Success update`, {
          position: 'top-right',
          autoClose: 1500,
        });
      })
      .catch(() => {
        toast.error(`Something went wrong. Try again`, {
          position: 'top-right',
          autoClose: 1500,
        });
      });
    setIsEditOpen(false);
    setIsOpenPopupMenu(false);
  };

  const onClickBackdrop = (e) => {
    if (e.target.className === 'backdropEditForm') {
      setIsEditOpen(false);
    }
  };

  return (
    <div onClick={onClickBackdrop} className="backdropEditForm">
      <ModalWindow>
        <div>
          <BtnClose type="button" onClick={handleClick}>
            <SvgIconClose>
              <use xlinkHref={`${sprite}#icon-close`}></use>
            </SvgIconClose>
          </BtnClose>
        </div>
        <div>
          <FormEdit onSubmit={onSubmitChanges}>
            <AvatarContainer>
              <Avatar
                src={imageURL === '' ? userAvatar || avatar : imageURL}
                alt="avatar of the user"
                width={80}
                height={80}
              />
              <AddAvatar
                type="file"
                name="avatar"
                id="avatar"
                onChange={handleUploadAvatar}
              />
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
                  <use xlinkHref={`${sprite}#icon-pencil`}></use>
                </SvgIcon>
              </EditNameButton>
            </LabelChangeName>
            <SaveChangeBtn type="submit">Save changes</SaveChangeBtn>
          </FormEdit>
        </div>
      </ModalWindow>
    </div>
  );
};

export default EditProfileForm;
