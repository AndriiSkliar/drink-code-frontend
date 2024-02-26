import { styled } from 'styled-components';

export const StyledList = styled.ul`
  margin-top: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 40px;

  @media screen and (min-width: 768px) {
    margin-top: 40px;
    flex-direction: row;
    row-gap: 80px;
    column-gap: 20px;
    flex-wrap: wrap;
  }
  @media screen and (min-width: 1280px) {
    margin-top: 62px;
    width: auto;
  }
`;
