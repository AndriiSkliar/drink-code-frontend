import styled from 'styled-components';
import images from 'src/assets/images/Hero/images';

export const StyledHomePage = styled.div`
  @media (min-width: 1280px) {
    background-image: url(${images.center_blur_desktop});
    background-size: 549px 543px;
    background-repeat: no-repeat;
    background-position: top 343px right;
    background-clip: content-box;
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
    width: 167px;
    height: 46px;
    background: #f3f3f3;

    font-weight: 600;
    font-size: 14px;
    line-height: 1.28571;
    color: #161f37;

    margin-bottom: 80px;
    margin-left: auto;
    margin-right: auto;

    transition:
      box-shadow 0.3s cubic-bezier(0.25, 0.1, 0.25, 1),
      border 0.3s cubic-bezier(0.25, 0.1, 0.25, 1),
      border-radius 0.3s cubic-bezier(0.25, 0.1, 0.25, 1);

    @media (min-width: 768px) {
      padding: 18px 44px;
      width: 187px;
      height: 54px;

      font-size: 16px;
      line-height: 1.125;

      margin-bottom: 140px;
    }

    @media (min-width: 1280px) {
      margin-bottom: 158px;
    }
  }

  .otherDrinksLink:hover,
  .otherDrinksLink:focus {
    border: 2px solid rgba(64, 112, 205, 0.5);
    border-radius: 42px;
    box-shadow: 0 0 20px rgba(64, 112, 205, 0.7);
  }
`;