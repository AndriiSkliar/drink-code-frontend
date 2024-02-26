import styled from 'styled-components';

// @media screen and (min-width: 768px) and (max-width: 1279px) {

//   }

// @media screen and (min-width: 1280px) {

// }

export const RecipeTitle = styled.h2`
  font-weight: 600;
  font-size: 28px;
  line-height: 114%;
  color: #f3f3f3;

  @media screen and (min-width: 768px) and (max-width: 1279px) {
    font-weight: 600;
    font-size: 40px;
    line-height: 110%;
    margin-top: 80px;
  }

  @media screen and (min-width: 1280px) {
    font-size: 40px;
    line-height: 110%;
    margin-top: 80px;
  }
`;

export const RecipeField = styled.textarea`
  background-color: transparent;
  border: 1px solid rgba(243, 243, 243, 0.5);
  color: #f3f3f3;
  border-radius: 14px;
  width: 335px;
  height: 184px;
  margin-top: 40px;
  margin-bottom: 20px;
  padding: 16px;
  resize: none;

  @media screen and (min-width: 768px) and (max-width: 1279px) {
    width: 480px;
    height: 184px;
    padding: 24px;
  }

  @media screen and (min-width: 1280px) {
    width: 480px;
    height: 184px;
    padding: 24px;
  }
`;
