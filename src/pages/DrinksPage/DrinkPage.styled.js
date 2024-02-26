import styled from 'styled-components';

export const StyledDrinksPage = styled.div`
  @media (min-width: 1280px) {
    padding: 0 100px;
    margin: 160px 0 140px 0;
  }

  /* Стили для мобильной версии */
  padding: 80px 20px;
  .searchingContainer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
  }
  .categoryListsContainer {
    margin-bottom: 60px;
  }

  .drinksTitle {
    font-weight: 600;
    font-size: 28px;
    line-height: 1.14286;
    color: var(--primary-text-color);

    margin-bottom: 80px;
  }

  /* Стили для планшетной версии (если они отличаются от мобильной) */
  @media (min-width: 768px) {
    .drinksTitle {
      font-size: 40px;
      line-height: 1.1;

      margin-bottom: 40px;
    }
    .searchingContainer {
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      gap: 20px;
    }
  }

  /* Стили для десктопной версии (если они отличаются от мобильной и планшетной) */
  @media (min-width: 1280px) {
    .drinksTitle {
      line-height: 1.1;
    }
    .searchingContainer {
      display: flex;
      flex-direction: row;
      gap: 20px;
    }
  }
`;
export const SearchingContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  margin-top: 40px;

  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    gap: 20px;
    margin-top: 62px;
  }
`;
