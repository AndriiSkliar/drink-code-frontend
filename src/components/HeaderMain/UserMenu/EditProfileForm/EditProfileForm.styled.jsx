import styled from 'styled-components';

export const AddAvatar = styled.input`
  &::-webkit-file-upload-button {
    visibility: hidden;
    width: 1px !important;
  }

  &::before {
    content: '+';
    display: inline-block;
    width: 28px;
    height: 28px;
    border-radius: 50%;
    background-color: #546081;
    color: #f3f3f3;
    font-size: 32px;
    font-weight: 400;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 64%;
    left: 30%;
  }
`;

export const Avatar = styled.img`
  border-radius: 50%;
`;

export const AvatarContainer = styled.div`
  position: relative;
  max-width: 80px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ChangeNameInput = styled.input`
  background-color: inherit;
  color: #f3f3f3;
  outline: none;
  border: 1px solid rgba(243, 243, 243, 0.5);
  border-radius: 200px;
  width: 285px;
  height: 54px;
  margin: 25px 25px 18px 25px;
  padding: 18px 0 18px 24px;
  &::placeholder {
    font-family: 'Manrope', sans-serif;
    font-weight: 400;
    font-size: 14px;
    line-height: 1.28;
    color: #f3f3f3;
  }
  &:focus-within {
    border: 1px solid #f3f3f3;
  }
  &:read-only {
    color: grey;
  }
`;

export const SaveChangeBtn = styled.button`
  border-radius: 200px;
  width: 285px;
  height: 54px;
  outline: none;
  border: none;
  font-weight: 600;
  font-size: 14px;
  line-height: 1.28571;
  color: #161f37;
  transition: all 400ms ease;
  &:hover {
    color: #f3f3f3;
    background-color: #161f37;
    border: 1px solid #f3f3f3;
  }
`;


export const FormEdit = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const SvgIcon = styled.svg`
  width: 14px;
  height: 14px;
`;

export const LabelChangeName = styled.label`
  position: relative;
`

export const EditNameButton = styled.button`
  background-color: inherit;
  outline: none;
  border: none;
  transition: all 400ms ease;
  position: absolute;
  top: 42%;
  right: 12%;
  &:hover {
    transform: scale(1.1);
  }
`