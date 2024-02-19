import styled from 'styled-components';

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100dvw;
  height: 100dvh;
  background-color: rgba(0, 0, 0, 0.61);
  z-index: 999;
`;

export const ModalWindow = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: var(--popup-bg);
  color: #f3f3f3;
  padding: 18px 18px 50px 18px;
  max-width: 500px;
  min-width: 300px;
  border-radius: 42px;
`;

export const BtnClose = styled.button`
  background-color: inherit;
  border: none;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
  margin-left: auto;
  transition: all 400ms ease;
  &:hover {
    transform: scale(1.2);
  }
`;
export const SvgIconClose = styled.svg`
  width: 32px;
  height: 32px;
  stroke: #f3f3f3;
`;

export const CloseModalContainer = styled.div`
  width: 100%;
`;

export const ModalLogoutText = styled.p`
  font-weight: 400;
  font-size: 18px;
  line-height: 1.33;
  letter-spacing: -0.02em;
  text-align: center;
  color: #f3f3f3;
  margin-bottom: 37px;
`;

export const ModalContent = styled.div`
  width: 100%;
  padding: 0 32px;
`;

export const LogoutBtn = styled.button`
  background-color: #f3f3f3;
  border-radius: 42px;
  border: 1px solid #f3f3f3;
  outline: none;
  width: 130px;
  height: 40px;
  font-weight: 600;
  font-size: 16px;
  line-height: 1.125;
  color: #161f37;
  transition: all 400ms ease;
  &:hover {
    background-color: #161f37;
    color: #f3f3f3;
  }
  @media screen and (min-width: 468px) {
    width: 196px;
    height: 54px;
  }
`;

export const CancelBtn = styled.button`
  background-color: #434d67;
  border-radius: 42px;
  border: 1px solid #434d67;
  outline: none;
  width: 130px;
  height: 40px;
  font-weight: 600;
  font-size: 16px;
  line-height: 1.125;
  color: #f3f3f3;
  transition: all 400ms ease;
  &:hover {
    background-color: #161f37;
    color: #f3f3f3;
  }
  @media screen and (min-width: 468px) {
    width: 196px;
    height: 54px;
  }
`;

export const ButtonsBlock = styled.div`
  display: flex;
  align-items: center;
  column-gap: 12px;
`;
