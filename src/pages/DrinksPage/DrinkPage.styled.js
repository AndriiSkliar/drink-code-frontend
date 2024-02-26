import styled from 'styled-components';
export const StyledDrinksPage = styled.div`
  margin-top: 80px;
  margin-bottom: 80px;

  /* Планшетная версия  */
  @media (min-width: 768px) {
    margin-top: 60px;
    margin-bottom: 60px;
  }
  /* Десктопная версия  */
  @media (min-width: 1280px) {
    margin-top: 80px;
  }

  .drinksTitle {
    font-weight: 600;
    font-size: 32px;
    line-height: 1.1875;
    color: var(--primary-text-color);

    margin-bottom: 40px;
  }

  /* Стили для планшетной версии */
  @media (min-width: 768px) {
    .drinksTitle {
      font-size: 56px;
      line-height: 1.1;

      margin-bottom: 60px;
    }
  }

    /* Десктопная версия  */
    @media (min-width: 1280px) {
      .drinksTitle {
        font-size: 64px;

        margin-bottom: 80px;
      }
    }

    .searchingContainer {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      row-gap: 20px;
    }
  

  /* Стили для планшетной версии */
  @media (min-width: 768px) {
    .searchingContainer {
      flex-direction: row;
      row-gap: 0;
      column-gap: 8px;
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
