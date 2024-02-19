import styled from 'styled-components';

export const StyledDrinksList = styled.div`
  .drinksList {
    list-style: none;
    padding: 0;

    @media (min-width: 768px) {
      display: flex;
      flex-wrap: nowrap;
      column-gap: 20px;
      justify-content: space-between;
    }

    @media (min-width: 1280px) {
      /* на будущее */
    }
  }

  /* Стили для мобильной версии */
  .drinksListTitle {
    font-family: 'Manrope', sans-serif;
    font-weight: 600;
    font-size: 28px;
    line-height: 1.14286;
    color: #f3f3f3;

    margin-bottom: 24px;
  }

  /* Стили для планшетной версии (если они отличаются от мобильной) */
  @media (min-width: 768px) {
    .drinksListTitle {
      font-size: 40px;
      line-height: 1.1;

      margin-bottom: 40px;
    }
  }

  /* Стили для десктопной версии (если они отличаются от мобильной и планшетной) */
  @media (min-width: 1280px) {
    .drinksListTitle {
      font-size: 40px;
      line-height: 1.1;
    }
  }
`;

export default StyledDrinksList;
