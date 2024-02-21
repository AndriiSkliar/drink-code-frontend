import styled from '@emotion/styled';
import { getColors } from './colors';

export const Wrapper = styled.section`  
    @media only screen and (min-width: 1280px) {
      max-width: 833px;
    }  
`;

export const Button = styled.button`
  width: 107px;

  color: ${({ theme }) => `${getColors(theme).btnTextColor}`};

  background-color: ${({ theme }) => `${getColors(theme).btnBackground}`};
  @media only screen and (min-width: 768px) {
    width: 118px;
  }

  &:hover {
    background-color: #161f37;
    background-color: ${({ theme }) => `${getColors(theme).btnTextColor}`};
    color: ${({ theme }) => `${getColors(theme).btnBackground}`};
  }
  &:active {
    color: ${({ theme }) => `${getColors(theme).btnTextColor}`};
    border: 2px solid #4070cd50;
    background-color: ${({ theme }) => `${getColors(theme).btnBackground}`};
  }
  &:disabled {
    color: #f3f3f320;
    background-color: #434d67;
  }
`;