import styled from 'styled-components';
import { Link } from 'react-router-dom';

import bgImageMobile from '../../assets/images/welcomePage/bg-welcome-mobile@1x.jpg';
import bgImageMobile2x from '../../assets/images/welcomePage/bg-welcome-mobile@2x.jpg';
import bgImageTablet from '../../assets/images/welcomePage/bg-welcome-tablet@1x.jpg';
import bgImageTablet2x from '../../assets/images/welcomePage/bg-welcome-tablet@2x.jpg';
import bgImageDesctop from '../../assets/images/welcomePage/bg-welcome-desctop@1x.jpg';
import bgImageDesctop2x from '../../assets/images/welcomePage/bg-welcome-desctop@2x.jpg';

const transition = '300ms cubic-bezier(0.46, 0.03, 0.52, 0.96)';

export const WelcomeWrapper = styled.section`
  background-image: url(${bgImageMobile});
  background-color: var(--background-color);
  background-position: center;
  background-size: contain;
  background-position: right center;
  background-repeat: no-repeat;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  &:before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 257px;
    height: 247px;
    transform: translate(-80%, -140%);
    background: rgba(188, 230, 210, 0.4);
    border-radius: 257px;
    filter: blur(104.8543701171875px);
    z-index: 1;
    pointer-events: none;
    @media screen and (min-width: 768px) {
      width: 387px;
      height: 372.442px;
      border-radius: 387px;
      background: rgba(188, 230, 210, 0.3);
      top: 50%;
      left: 50%;
      transform: translate(-90%, -120%);
    }
    @media screen and (min-width: 1440px) {
      width: 387px;
      height: 381px;
      background: rgba(188, 230, 210, 0.4);
      top: 50%;
      left: 50%;
      transform: translate(-129%, -160%);
    }
  }

  &:after {
    content: '';
    position: absolute;
    top: -20%;
    right: 90%;
    width: 520px;
    height: 550px;
    transform: translateY(-50%, 50%);
    border-radius: 550px;
    background: rgba(64, 112, 205, 0.5);
    filter: blur(104.8543701171875px);
    z-index: 1;
    pointer-events: none;
    @media screen and (min-width: 768px) {
      width: 784px;
      height: 829.931px;
      border-radius: 829.931px;
      top: -50%;
      right: 90%;
      z-index: 1;
    }
    @media screen and (min-width: 1440px) {
      height: 849px;
      top: -25%;
      right: 85%;
      z-index: 1;
    }
  }

  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url(${bgImageMobile2x});
  }

  @media screen and (min-width: 768px) {
    background-image: url(${bgImageTablet});
    justify-content: left;
    padding-left: 64px;

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${bgImageTablet2x});
    }
  }
  @media screen and (min-width: 1440px) {
    background-image: url(${bgImageDesctop});
    background-color: rgb(7, 7, 11);
    padding-left: 100px;

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${bgImageDesctop2x});
    }
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  color: #f3f3f3;
  position: relative;
  max-width: 335px;
  margin-left: 20px;

  @media screen and (min-width: 768px) {
    max-width: 470px;
    margin-left: 64px;
    align-items: start;
  }

  @media screen and (min-width: 1440px) {
    max-width: 485px;
    margin-left: 100px;
    align-items: start;
  }
`;

export const WelcomeTitle = styled.h2`
  margin-bottom: 14px;
  font-size: 28px;
  font-weight: 600;
  line-height: 32px;

  @media screen and (min-width: 768px) {
    font-size: 40px;
    line-height: 44px;
  }
`;

export const WelcomeText = styled.p`
  margin-bottom: 40px;
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;

  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 24px;
  }
`;

export const ButtonDiv = styled.div`
  display: flex;
  gap: 14px;
`;

export const SignUpBut = styled(Link)`
  background-color: #f3f3f3;
  color: #0a0a11;
  padding: 18px 44px 18px 44px;
  border-radius: 42px;
  text-decoration: none;
  border: rgba(243, 243, 243, 0.2) solid 1px;
  transition: background-color ${transition}, color ${transition};
  &:hover {
    background-color: #434D67;
    color: #f3f3f3;
  }
`;

export const SignInBut = styled(SignUpBut)`
  background-color: #0a0a11;
  color: #f3f3f3;
`;