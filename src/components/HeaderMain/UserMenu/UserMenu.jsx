// @ts-nocheck
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import UserPopup from './UserPopup/UserPopup';
import { AvatarImage, BtnUserMenu, UserMenuContainer } from './UserMenu.styled';
import authSelectors from '../../../redux/auth/authSelectors';

const UserMenu = () => {
  const [isOpenPopupMenu, setIsOpenPopupMenu] = useState(false);
  const name = useSelector(authSelectors.selectUserName);
  const avatar = useSelector(authSelectors.selectAvatarURL);
  const [userAvatar, setUserAvatar] = useState(avatar);

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === 'Escape') {
        setIsOpenPopupMenu(false);
      }
    };

    document.addEventListener('keydown', handleKeyPress);

    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (!e.target.closest('div') && isOpenPopupMenu) {
        setIsOpenPopupMenu(false);
      }
    };
    document.addEventListener('click', handleOutsideClick);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [isOpenPopupMenu]);

  return (
    <UserMenuContainer>
      <BtnUserMenu onClick={() => setIsOpenPopupMenu((prev) => !prev)}>
        <AvatarImage
          src={userAvatar}
          alt="Avatar by defult"
        />
        <p>{name}</p>
      </BtnUserMenu>
      {isOpenPopupMenu && <UserPopup setUserAvatar={setUserAvatar}/>}
    </UserMenuContainer>
  );
};

export default UserMenu;
