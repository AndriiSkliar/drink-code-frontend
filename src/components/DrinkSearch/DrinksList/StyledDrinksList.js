import styled from 'styled-components';
export const StyledDrinksList = styled.div`
  margin-top: 40px;
  list-style: none;
  padding: 0;

  @media (min-width: 768px) {
    .drinksList {
      display: flex;
      flex-wrap: wrap;
      column-gap: 20px;
      row-gap: 40px;
      justify-content: space-between;

      margin-bottom: 0;
    }
  }
  @media (min-width: 1280px) {
    .drinksList {
      row-gap: 80px;
      margin-bottom: 0;
    }
  }
`;

export default StyledDrinksList;
