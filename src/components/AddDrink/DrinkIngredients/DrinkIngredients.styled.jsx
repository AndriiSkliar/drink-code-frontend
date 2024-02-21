import styled from '@emotion/styled';
import { colors } from '../colors';

export const Wrapper = styled.div`
  margin-bottom: 80px;
`;

export const DivTop = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
`;

export const Title = styled.h2`
  color: ${({ theme }) =>
    theme === 'dark' ? `${colors.light}` : `${colors.primaryDark}`};
`;

export const DivIncrement = styled.div`
  padding: 0px 12px;
  width: 104px;
  height: 38px;
  display: flex;
  justify-content: space-between;
  line-height: calc(18 / 14);
  align-items: center;
  border: ${({ theme }) =>
    theme === 'dark' ? '1px solid #f3f3f350' : '1px solid #0A0A1150'};
  border-radius: 200px;
  @media only screen and (min-width: 768px) {
    width: 114px;
    height: 44px;
    padding: 0px 10px;
  }
`;

export const Button = styled.button`
  padding: 0;
  letter-spacing: -0.05em;
  color: ${({ theme }) => (theme === 'dark' ? '#f3f3f330' : '#0A0A1130')};
  :hover {
    color: ${({ theme }) =>
      theme === 'dark' ? '#f3f3f380' : `${colors.primaryDark}`};
    scale: 1.25;
  }
`;
export const ButtonIncr = styled.button`
  padding: 0;
  font-size: 20px;
  letter-spacing: -0.05em;
  color: ${({ theme }) =>
    theme === 'dark' ? `${colors.light}` : `${colors.primaryDark}`};
  :hover {
    color: ${({ theme }) =>
      theme === 'dark' ? '#f3f3f380' : `${colors.primaryDark}`};
    scale: 1.45;
  }
`;

export const SpanIncrement = styled.span`
  color: ${({ theme }) =>
    theme === 'dark' ? `${colors.light}` : `${colors.primaryDark}`};
  font-size: 14px;
  line-height: calc(18 / 14);
  @media only screen and (min-width: 768px) {
    font-size: 17px;
    line-height: 1.56;
  }
`;

export const List = styled.ul`
  display: flex;
  gap: 18px;
  flex-direction: column;
  list-style: none;
  @media only screen and (min-width: 768px) {
    gap: 24px;
  }
`;