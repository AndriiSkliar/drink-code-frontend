import styled from 'styled-components';

export const SocialContainer = styled.div`
  display: flex;
  gap: 14px;

  @media (min-width: 768px) {
    gap: 16px;
  }
`;

export const SocialLink = styled.a`
  border-radius: 10px;
  display: block;
  border: 1px solid rgba(243, 243, 243, 0.2);
  padding: 8px;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  transition: opacity border-color 200ms linear;
  transition: border-color 200ms linear;
  transition: transform 200ms linear;

  &:hover,
  &:focus {
    border-color: rgba(243, 243, 243, 0.5);
    transform: scale(1.2);
  }

  &:hover g,
  &:focus g {
    opacity: 1;
  }
`;

export const SocialIcon = styled.svg`
  width: 22px;
  height: 22px;

  @media (min-width: 768px) {
    width: 28px;
    height: 28px;
  }
`;
