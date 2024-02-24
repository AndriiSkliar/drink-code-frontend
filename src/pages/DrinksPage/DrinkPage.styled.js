import styled from 'styled-components';

export const StyledDrinksPage = styled.div`
  @media (min-width: 1280px) {
    margin-bottom: 160px;
    margin: 160px 100px;
  }

  @media (min-width: 768px) {
    padding: 18px 44px;
    width: 187px;
    height: 54px;

    font-size: 16px;
    line-height: 1.125;

    margin-bottom: 140px;
  }

  .searchingContainer {
    width: 678px;
    height: 465px;
    display: flex;
    flex-direction: row;
    gap: 20px;
  }
  .categoryListsContainer {
    margin-bottom: 60px;
  }
`;
