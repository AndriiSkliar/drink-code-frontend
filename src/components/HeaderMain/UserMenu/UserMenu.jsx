import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import UserPopup from './UserPopup/UserPopup';
import { AvatarImage, BtnUserMenu, UserMenuContainer } from './UserMenu.styled';
import { selectAvatarURL, selectUserName } from '../../../redux/selectors/auth.selectors';

const UserMenu = () => {
  const [isOpenPopupMenu, setIsOpenPopupMenu] = useState(false);
  const name = useSelector(selectUserName);
  const avatar = useSelector(selectAvatarURL);
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
      if (!e.target.closest('.user-menu-container') && isOpenPopupMenu) {
        setIsOpenPopupMenu(false);
      }
    };
    document.addEventListener('click', handleOutsideClick);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [isOpenPopupMenu]);

  return (
    <UserMenuContainer className='user-menu-container'>
      <BtnUserMenu onClick={() => setIsOpenPopupMenu((prev) => !prev)}>
        <AvatarImage
          src={userAvatar || avatar}
          alt="Avatar by default"
        />
        <p>{name}</p>
      </BtnUserMenu>
      {isOpenPopupMenu && <UserPopup setUserAvatar={setUserAvatar} userAvatar={userAvatar} setIsOpenPopupMenu={setIsOpenPopupMenu}/>}
    </UserMenuContainer>
  );
};

export default UserMenu;
