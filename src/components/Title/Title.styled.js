import { styled } from 'styled-components';

export const StyledTitle = styled.h1`
  font-size: 32px;
  line-height: 1.1875;
  color: #f3f3f3;
  @media screen and (min-width: 768px) and (max-width: 1279px) {
    font-size: 56px;
    line-height: 1.07143;
  }

  @media screen and (min-width: 1280px) {
    font-size: 64px;
    line-height: 1.0625;
  }
`;
