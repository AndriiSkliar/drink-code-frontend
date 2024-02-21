import styled from 'styled-components';

export const StyledHero = styled.div`
  display: block;
  margin-top: 80px;
  margin-bottom: 112px;

  /* Планшетная версия  */
  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    margin-top: 120px;
    margin-bottom: 123px;
  }
  /* Десктопная версия  */
  @media (min-width: 1280px) {
    margin-top: 185px;
    margin-bottom: 218px;
  }

  .heroContent {
    margin-bottom: 47px;
  }
  @media (min-width: 768px) {
    .heroContent {
      margin-bottom: 54px;
    }
  }
  @media (min-width: 1280px) {
    .heroContent {
      margin-bottom: 0;
    }
  }

  .heroTitle {
    font-weight: 600;
    color: #f3f3f3;
    font-size: 32px;
    line-height: 1.1875;

    max-width: 335px;
    margin-bottom: 16px;
  }

  /* Планшетная версия */
  @media (min-width: 768px) {
    .heroTitle {
      font-size: 56px;
      line-height: 1.07143;

      margin-bottom: 28px;
      max-width: 641px;
    }
  }

  /* Десктопная версия */
  @media (min-width: 1280px) {
    .heroTitle {
      font-size: 64px;
      line-height: 1.0625;

      max-width: 715px;
    }
  }

  .heroDescription {
    font-weight: 400;
    color: #f3f3f3;

    font-size: 14px;
    line-height: 1.42857;

    max-width: 335px;
    margin-bottom: 32px;
  }

  /* Планшетная версия */
  @media (min-width: 768px) {
    .heroDescription {
      font-size: 18px;
      line-height: 1.33333;

      max-width: 619px;
      margin-bottom: 48px;
    }
  }

  /* Десктопная версия */
  @media (min-width: 1280px) {
    .heroDescription {
      max-width: 500px;
      margin-bottom: 40px;
    }
  }

  .addDrinkLink {
    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 42px;
    padding: 14px 40px;
    width: 151px;
    height: 46px;
    background: #f3f3f3;

    font-weight: 600;
    font-size: 14px;
    line-height: 1.28571;
    color: #161f37;
  }

  /* Планшетная версия */
  @media (min-width: 768px) {
    .addDrinkLink {
      padding: 18px 44px;
      width: 169px;
      height: 54px;

      font-size: 16px;
      line-height: 1.125;
    }
  }

  /* Десктопная версия */
  @media (min-width: 1280px) {
    .addDrinkLink {
      width: 160px;
      margin-bottom: 0;
    }
  }


`;
export default StyledHero;
