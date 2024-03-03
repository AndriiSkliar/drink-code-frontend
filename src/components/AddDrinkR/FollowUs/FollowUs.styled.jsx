import styled from 'styled-components';

export const FollowIconsList = styled.ul`
  display: inline-flex;
  column-gap: 14px;
`;

export const FollowIcon = styled.li`
  opacity: 0.8;
  transition: opacity 250ms ease;
  &:hover,
  &:focus {
    opacity: 1;
  }
`;

export const FollowIconLink = styled.a`
  display: inline-flex;

  width: 38px;
  height: 38px;
  padding: 8px;

  align-items: center;
  justify-content: center;

  border-radius: 10px;
  border: 1px solid var(--primary-text-color);

  transition: border-color 250ms ease;

  &:hover,
  &:focus {
    border: 1px solid var(--primary-text-color);
  }

  @media screen and (min-width: 768px) {
    width: 44px;
    height: 44px;
  }
`;

export const IconSvg = styled.svg`
  width: 22px;
  height: 22px;
  fill: var(--primary-text-color);

  @media screen and (min-width: 768px) {
    width: 28px;
    height: 28px;
  }
`;
