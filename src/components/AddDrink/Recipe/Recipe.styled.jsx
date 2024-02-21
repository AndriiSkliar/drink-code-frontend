import styled from 'styled-components';
import { colors } from '../colors';

export const Div = styled.div`
  margin-bottom: 20px;
  position: relative;
`;

export const Title = styled.h2`
  margin-bottom: 40px;
  color: ${({ theme }) =>
    theme === 'dark' ? `${colors.light}` : `${colors.primaryDark}`};
`;
export const TextareaDiv = styled.div`
  position: relative;
`;

export const Textarea = styled.textarea`
  font-family: 'Manrope', sans-serif;
  position: relative;
  padding: 16px 18px;
  width: 100%;
  height: 184px;
  font-size: 14px;
  line-height: calc(18 / 14);
  letter-spacing: 0;
  background-color: inherit;
  color: ${({ theme }) =>
    theme === 'dark' ? `${colors.light}` : `${colors.primaryDark}`};
  border: ${({ errors, value, theme }) =>
    value && errors
      ? '1px solid #3cbc8150'
      : errors
      ? '1px solid #da141450'
      : `1px solid ${({ theme }) =>
          theme === 'dark' ? `${colors.light}` : `${colors.primaryDark}`}`};
  border-radius: 14px;
  @media only screen and (min-width: 768px) {
    padding: 14px 24px;
    width: 480px;
    font-size: 17px;
    line-height: 1.56;
  }
  :focus {
    outline: none;
  }
  :hover {
    border: 1px solid
      ${({ theme }) =>
        theme === 'dark' ? `${colors.light}` : `${colors.primaryDark}`};
  }
`;

export const MockPlaceholder = styled.span`
  margin-left: 18px;
  position: absolute;
  top: 38px;
  font-size: 14px;
  line-height: calc(18 / 14);
  letter-spacing: 0;
  color: ${({ theme }) => (theme === 'dark' ? '#f3f3f350' : '#0A0A1150')};
  @media only screen and (min-width: 768px) {
    top: 46px;
    margin-left: 24px;
    font-size: 17px;
    line-height: 1.56;
  }
`;

export const ErrorText = styled.p`
  margin-left: 18px;
  display: flex;
  align-items: center;
  position: absolute;
  top: 48px;
  font-size: 12px;
  line-height: calc(14 / 12);
  letter-spacing: 0;
  color: #da1414;
  @media only screen and (min-width: 768px) {
    top: 58px;
    margin-left: 24px;
    font-size: 14px;
    line-height: calc(18 / 14);
  }
`;
export const ErrorIcon = styled.span`
  margin-left: 10px;
  display: flex;
  align-content: center;
  justify-content: center;
  flex-wrap: wrap;
  width: 10px;
  height: 10px;
  border: 1px solid #da1414;
  border-radius: 50%;
  @media only screen and (min-width: 768px) {
    width: 12px;
    height: 12px;
  }
`;