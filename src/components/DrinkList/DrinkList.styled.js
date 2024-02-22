import { styled } from 'styled-components';

export const StyledList = styled.ul`
  margin-top: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  row-gap: 40px;

  @media screen and (min-width: 768px) {
    margin-top: 60px;
    flex-direction: row;
    flex-wrap: wrap;
    column-gap: 20px;
    row-gap: 80px;
    justify-content: flex-start;
  }
`;
