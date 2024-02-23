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
  color: var(--primary-text-color);
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
    color: var(--primary-text-color);
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
    width: 155px;
    height: 46px;
    background:var(--link-bg);

    font-weight: 600;
    font-size: 14px;
    line-height: 1.28571;
    color: var( --link-text);

    transition:
      box-shadow 0.3s cubic-bezier(0.25, 0.1, 0.25, 1),
      border 0.3s cubic-bezier(0.25, 0.1, 0.25, 1),
      border-radius 0.3s cubic-bezier(0.25, 0.1, 0.25, 1),
      background-color 0.3s cubic-bezier(0.25, 0.1, 0.25, 1);

  }

  /* Планшетная версия */
  @media (min-width: 768px) {
    .addDrinkLink {
      padding: 18px 44px;
      width: 173px;
      height: 54px;

      font-size: 16px;
      line-height: 1.125;
    }
  }

  /* Десктопная версия */
  @media (min-width: 1280px) {
    .addDrinkLink {
      width: 164px;
      margin-bottom: 0;
    }
  }
  .addDrinkLink:hover,
  .addDrinkLink:focus {
    border: 2px solid rgba(64, 112, 205, 0.5);
    border-radius: 42px;
    box-shadow: 0 0 20px rgba(64, 112, 205, 0.7);
    background-color: var( --link-bg-hover);
  }
`;
export default StyledHero;
