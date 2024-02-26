import styled from 'styled-components';

//   @media screen and (min-width: 1280px) {
//
//   }

export const ImageLabel = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  width: 50px;
  height: 50px;
  background-color: #f3f3f3;
  color: black;
  position: absolute;
  z-index: 2;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  cursor: pointer;
  font-size: 35px;

  @media screen and (min-width: 768px) and (max-width: 1279px) {
    left: 185px;
    top: 185px;
    transform: translate(-100%, -100%);
  }

  @media screen and (min-width: 1280px) {
    left: 225px;
    top: 206px;

    transform: translate(-100%, -100%);
  }
`;

export const InputImage = styled.input`
  width: 100%;
  margin-bottom: 40px;
  background-color: transparent;

  @media screen and (min-width: 768px) and (max-width: 1279px) {
    width: 80px;
    margin-bottom: 0;
  }
  @media screen and (min-width: 1280px) {
    width: 80px;
    margin-bottom: 0;
  }
`;

export const DescHelper = styled.div`
  position: relative;
`;

export const InputBG = styled.div`
  position: relative;
  width: 335px;
  height: 320px;
  background-color: rgba(22, 31, 55, 0.5);
  border-radius: 5px;

  @media screen and (min-width: 768px) and (max-width: 1279px) {
    width: 320px;
  }

  @media screen and (min-width: 1280px) {
    width: 400px;
    height: 400px;
    position: relative;
  }
`;

export const DrinkImg = styled.img`
  margin-bottom: 40px;
  display: block;
  @media screen and (min-width: 768px) and (max-width: 1279px) {
    margin-bottom: 0;
  }
  @media screen and (min-width: 1280px) {
    width: 400px;
    height: 400px;
  }
`;

export const TabletMainContainer = styled.div`
  @media screen and (min-width: 768px) and (max-width: 1279px) {
    display: flex;
    gap: 32px;
  }
  @media screen and (min-width: 1280px) {
    display: flex;
    gap: 40px;
  }
`;

export const TabletContainer = styled.div`
  @media screen and (min-width: 768px) and (max-width: 1279px) {
    width: 352px;
  }
  @media screen and (min-width: 1280px) {
    width: 393px;
  }
`;

export const DrinkInput = styled.input`
  background-color: transparent;
  border: none;
  border-bottom: 1px solid var(--secondary-text-color);
  margin-bottom: 31px;
  color: #f3f3f3;
  width: 335px;
  height: 34px;
  @media screen and (min-width: 768px) and (max-width: 1279px) {
    height: 41px;
    width: 352px;
  }
  @media screen and (min-width: 1280px) {
    width: 393px;
    height: 41px;
    margin-bottom: 41px;
  }
`;

export const DrinkLabel = styled.label`
  font-weight: 400;
  font-size: 14px;
  color: var(--secondary-text-color);
  @media screen and (min-width: 768px) and (max-width: 1279px) {
    font-size: 16px;
  }
  @media screen and (min-width: 1280px) {
    font-size: 16px;
    letter-spacing: -0.02em;
  }
`;

export const SelectLabel = styled.p`
  width: 335px;
  height: 34px;
  margin-bottom: 34px;
  border-bottom: 1px solid var(--secondary-text-color);
  color: var(--secondary-text-color);
  font-size: 14px;
  @media screen and (min-width: 768px) and (max-width: 1279px) {
    font-size: 16px;
    height: 41px;
    width: 352px;
    margin-bottom: 31px;
    &.glassmargin {
      margin-bottom: 39px;
    }
  }
  @media screen and (min-width: 1280px) {
    font-size: 16px;
    width: 393px;
    height: 41px;
    &.glassmargin {
      margin-bottom: 40px;
    }
  }
`;

export const CategoryInput = styled.select`
  position: absolute;
  top: 0;
  right: 0;
  border: none;
  text-align: end;
  width: 170px;
  border-radius: 200px;
  background-color: transparent;
  border-radius: 200px;
  color: var(--secondary-text-color);
  cursor: pointer;
  @media screen and (min-width: 768px) and (max-width: 1279px) {
    font-size: 16px;
  }
  @media screen and (min-width: 1280px) {
    font-size: 16px;
  }
`;

export const PositionContainer = styled.div`
  position: relative;
`;
export const RadioMainContainer = styled.div`
  display: flex;
  gap: 14px;
`;

export const RadioSecondaryContainer = styled.div`
  color: var(--secondary-text-color);
  display: flex;
  gap: 8px;
  font-weight: 400;
  font-size: 16px;
  letter-spacing: -0.02em;
  /* accent-color: var(--secondary-text-color); */

  input:checked + label {
    color: var(--primary-text-color);
  }
`;
