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
    border: none;

    padding-top: 14px;
    padding-bottom: 14px;

    width: 222px;
    height: 46px;
    background: #f3f3f3;
    margin-top: 40px;
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  .btn-add-rem-fav:hover,
  .btn-add-rem-fav:focus {
    color: var(--primary-text-color);
    background: var(--primary-black-color);
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
    display: flex;
    row-gap: 20px;
    column-gap: 21px;
    flex-wrap: wrap;
    margin-top: 42px;
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
    color: var(--primary-text-color-05);
  }

  .ingred-item {
  }

  .img-ingred {
    background: rgba(22, 31, 55, 0.5);
    border-radius: 8px;
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
    margin-bottom: 60px;
  }
`;
