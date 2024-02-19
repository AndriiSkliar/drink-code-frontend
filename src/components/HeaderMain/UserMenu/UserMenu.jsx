// @ts-nocheck
import { useState, useEffect } from 'react';
import UserPopup from './UserPopup/UserPopup';
import { AvatarImage, BtnUserMenu, UserMenuContainer } from './UserMenu.styled';

const UserMenu = () => {
  const [isOpenPopupMenu, setIsOpenPopupMenu] = useState(false);

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
          src="/src/assets/images/header/default-avatar.png"
          alt="Avatar by defult"
        />
        <p>Vladyslav</p>
      </BtnUserMenu>
      {isOpenPopupMenu && <UserPopup />}
    </UserMenuContainer>
  );
};

export default UserMenu;
