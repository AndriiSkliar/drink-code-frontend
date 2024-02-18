// @ts-nocheck

import {
  Backdrop,
  BtnClose,
  ButtonsBlock,
  CancelBtn,
  LogoutBtn,
  ModalLogoutText,
  ModalWindow,
  SvgIconClose,
} from './LogoutSure.styled';

const LogoutSure = ({ setIsOpenLogout }) => {

  const handleClick = () => setIsOpenLogout(false);

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
          <ModalLogoutText>Are you sure you want to logout?</ModalLogoutText>
          <ButtonsBlock>
            <LogoutBtn type="button">Log out</LogoutBtn>
            <CancelBtn type="button" onClick={handleClick}>Cancel</CancelBtn>
          </ButtonsBlock>
        </div>
      </ModalWindow>
    </Backdrop>
  );
};

export default LogoutSure;
