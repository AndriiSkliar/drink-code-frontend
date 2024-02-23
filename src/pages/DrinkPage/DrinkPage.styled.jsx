import { styled } from 'styled-components';

export const StyledDrinkPage = styled.div`
  .desc-glass-alco {
    font-weight: 400;
    font-size: 12px;
    line-height: 1.16667;
    color: var(--primary-text-color-05);
    margin-top: 8px;

    /* @media (min-width: 768px) {
      margin-bottom: 0;
    } */
  }

  .desc-drink {
    font-weight: 400;
    font-size: 14px;
    line-height: 1.28571;
    color: var(--primary-text-color);
    margin-top: 20px;
  }

  .btn-add-rem-fav {
    font-weight: 600;
    font-size: 14px;
    line-height: 1.28571;
    color: var(--primary-black-color);
    border-radius: 42px;
    padding: 14px 40px;
    width: 222px;
    height: 46px;
    background: #f3f3f3;
    margin-top: 40px;
  }

  .img-drink {
    border-radius: 8px;
    width: 335px;
    height: 400px;
    margin-top: 80px;
  }

  .title-sect-ingred {
    font-weight: 500;
    font-size: 16px;
    line-height: 1.25;
    color: rgba(243, 243, 243, 0.5);
    margin-top: 18px;
  }

  .ingred-list {
  }

  .ingred-descr {
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-top: 8px;
  }

  .ingred-name {
    font-weight: 500;
    font-size: 14px;
    line-height: 1.28571;
    color: var(--primary-text-color);
  }

  .ingred-quantity {
    font-weight: 500;
    font-size: 14px;
    line-height: 1.28571;
    color: var(primary-text-color-05);
  }

  .ingred-item {
    border-radius: 8px;
    width: 157px;
    height: 157px;
    background: rgba(22, 31, 55, 0.5);
  }

  .descr-drink-title {
    font-weight: 600;
    font-size: 28px;
    line-height: 1.14286;
    color: var(--primary-text-color);
    margin-top: 80px;
  }

  .recipe-text {
    font-weight: 400;
    font-size: 14px;
    line-height: 1.28571;
    color: var(--primary-text-color);
    margin-top: 40px;
  }

  .img-three-drinks {
    border-radius: 8px;
    width: 335px;
    height: 430px;
    margin-top: 40px;
    margin-bottom: 80px;
  }
`;
