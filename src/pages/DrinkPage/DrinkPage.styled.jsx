import { styled } from 'styled-components';

export const StyledDrinkPage = styled.div`
  .desc-glass-alco {
    font-weight: 400;
    font-size: 12px;
    line-height: 1.16667;
    color: var(--primary-text-color-05);
    margin-top: 8px;
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
    width: 157px;
    height: 157px;
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

  @media screen and (min-width: 768px) and (max-width: 1279px) {
    .container {
      padding-top: 140px;
      padding-bottom: 140px;
    }

    .img-drink {
      width: 704px;
    }

    .img-three-drinks {
      width: 704px;
    }
  }

  @media screen and (min-width: 1280px) {
    .container {
      padding-left: 100px;
      padding-right: 100px;
      padding-bottom: 140px;
      padding-top: 132px;
    }
    .img-drink {
      width: 400px;
    }

    .ingred-list {
      row-gap: 35px;
      column-gap: 35px;
    }

    .descr-drink-title {
      margin-top: 100px;
    }

    .img-three-drinks {
      width: 631px;
      height: 480px;
    }
  }

  @media screen and (min-width: 768px) {
    .desc-glass-alco {
      font-size: 16px;
      line-height: 1.25;
    }

    .desc-drink {
      font-size: 16px;
      line-height: 1.375;
    }

    .btn-add-rem-fav {
      line-height: 1.125;

      padding-top: 18px;
      padding-bottom: 18px;

      width: 250px;
      height: 54px;
    }

    .img-ingred {
      background: rgba(22, 31, 55, 0.5);
      width: 220px;
      height: 220px;
    }

    .ingred-name {
      font-size: 18px;
      line-height: 1.3333;
    }

    .ingred-quantity {
      font-size: 16px;
      line-height: 1.25;
    }

    .ingred-descr {
      margin-top: 14px;
    }

    .ingred-list {
      row-gap: 22px;
      column-gap: 22px;
      margin-top: 24px;
    }

    .descr-drink-title {
      font-size: 40px;
      line-height: 1.1;
    }

    .recipe-text {
      font-size: 16px;
      line-height: 1.375;
    }
  }
`;
