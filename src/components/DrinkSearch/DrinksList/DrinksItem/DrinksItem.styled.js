import styled from 'styled-components';
export const StyledCocktailWrapper = styled.li`
  display: flex;
  flex-direction: column;
  gap: 18px;
  width: 335px;
  margin-bottom: 28px;

  @media screen and (min-width: 768px) {
    row-gap: 14px;
    width: 342px;
    margin-bottom: 0;
  }

  @media screen and (min-width: 1280px) {
    width: 400px;
  }
`;

export const StyledCocktailImageContainer = styled.div`
  position: relative;

  &:before {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    bottom: 0;
    height: 200px;
    border-radius: 8px;
    background: linear-gradient(
      180deg,
      rgba(10, 10, 17, 0.03) 2.37%,
      rgba(10, 10, 17, 0.96) 95.31%
    );
    z-index: 1;
  }
`;

export const StyledCocktailImage = styled.img`
  border-radius: 8px;
  height: 360px;

  @media screen and (min-width: 1280px) {
    height: 400px;
  }
`;

export const StyledCocktailName = styled.h2`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.125;
  color: var(--primary-text-color);

  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 1.33333;
  }
`;

export const StyledCocktailSeeMore = styled.p`
  cursor: pointer;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.28571;
  text-align: right;
  color: var(--secondary-text-color);

  &:hover {
    text-decoration: underline;
  }

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.125;
  }
`;
export const StyledDrinkInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: calc(100% - 2px);

  @media screen and (min-width: 768px) {
    width: 342px;
  }

  @media screen and (min-width: 1280px) {
    width: 400px;
  }
`;
