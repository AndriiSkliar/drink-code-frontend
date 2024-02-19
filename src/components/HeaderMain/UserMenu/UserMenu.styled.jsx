import styled from 'styled-components';

export const AvatarImage = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
`;

export const UserMenuContainer = styled.div`
  position: relative;
`;

export const BtnUserMenu = styled.button`
  background-color: inherit;
  color: var(--primary-text-color);
  font-weight: 500;
  font-size: 14px;
  line-height: 1.28;
  border: none;
  outline: none;
  display: flex;
  align-items: center;
  column-gap: 8px;
`;
