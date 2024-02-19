import styled from 'styled-components';
import images from '../../assets/images/Hero/images';

export const StyledHomePage = styled.div`
  background:
    url(${images.left_blur_mobile}) left top,
    url(${images.right_blur_mobile}) right top;
  background-repeat: no-repeat;
  background-size: cover;

  @media (min-width: 768px) {
    background:
      url(${images.left_blur_tablet}) left top,
      url(${images.right_blur_tablet}) right top;
    background-repeat: no-repeat;
    background-size: cover;
  }

  @media (min-width: 1280px) {
    background:
      url(${images.center_blur_desktop}) center top,
      url(${images.left_blur_desktop}) left top,
      url(${images.right_blur_desktop}) right top;
    background-size: cover;
    background-size:
      387px 381px,
      784px 849px,
      549px 543px;
    background-repeat: no-repeat;
  }

  .categoryListsContainer {
    margin-bottom: 60px;

    @media (min-width: 768px) {
      margin-bottom: 0;
    }
  }

  .otherDrinksLink {
    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 42px;
    padding: 14px 40px;
    width: 163px;
    height: 46px;
    background: #f3f3f3;

    font-family: 'Manrope', sans-serif;
    font-weight: 600;
    font-size: 14px;
    line-height: 1.28571;
    color: #161f37;

    margin-bottom: 80px;
    margin-left: auto;
    margin-right: auto;

    @media (min-width: 768px) {
      padding: 18px 44px;
      width: 183px;
      height: 54px;

      font-size: 16px;
      line-height: 1.125;

      margin-bottom: 140px;
    }

    @media (min-width: 1280px) {
      width: 183px;
      height: 54px;
      margin-bottom: 158px;
    }
  }
`;
