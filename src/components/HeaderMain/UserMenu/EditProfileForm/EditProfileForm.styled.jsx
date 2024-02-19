import styled from 'styled-components';

export const AddAvatar = styled.input`
  &::-webkit-file-upload-button {
    visibility: hidden;
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
  }
`;

export const Avatar = styled.img`
    border-radius: 50%;
`

export const AvatarContainer = styled.div`
    position: relative;
    max-width: 80px;
    margin: 0 auto;
`
