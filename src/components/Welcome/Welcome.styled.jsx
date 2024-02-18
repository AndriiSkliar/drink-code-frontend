import styled from '@emotion/styled';
import { Box, Button, Typography } from '@mui/material';

import bgImageMobile from '../../assets/images/welcomePage/bg-welcome-mobile@1x.jpg';
import bgImageMobile2x from '../../assets/images/welcomePage/bg-welcome-mobile@2x.jpg';
import bgImageTablet from '../../assets/images/welcomePage/bg-welcome-tablet@1x.jpg';
import bgImageTablet2x from '../../assets/images/welcomePage/bg-welcome-tablet@2x.jpg';
import bgImageDesctop from '../../assets/images/welcomePage/bg-welcome-desctop@1x.jpg';
import bgImageDesctop2x from '../../assets/images/welcomePage/bg-welcome-desctop@2x.jpg';

export const StyledDiv = styled.div`
  min-width: 320px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 304px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  text-align: center;

  @media screen and (min-width: 375px) {
    width: 335px;
    padding-left: 20px;
    padding-right: 20px;
  }

  @media screen and (min-width: 768px) {
    width: 470px;
    align-items: start;
    text-align: left;
    padding-top: 400px;
    margin-left: 64px;
    margin-right: auto;
    padding-left: 0px;
    padding-right: 0px;
  }

  @media screen and (min-width: 1440px) {
    padding-top: 273px;
    width: 485px;
    margin-left: 100px;
  }
`;

export const StyledSection = styled.section`
  background-image: url(${bgImageMobile});
  background-color: var(--black-color);
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

export const StyledButton = styled(Button)`
  width: 125px;
  height: 46px;
  display: flex;
  gap: 10px;
  border-radius: 42px;
  background: var(--whitetwenty-color);
  border: 1px solid var(--whitetwenty-color);
  color: var(--white-color);
  transition:
    color var(--transition),
    background var(--transition),
    transform var(--transition);

  && {
    &:hover,
    &:focus {
      background-color: var(--white-color);
      color: var(--blue-color);
      transform: scale(1.05);
    }
  }

  @media screen and (min-width: 768px) {
    width: 140px;
    height: 54px;
    gap: 14px;
  }

  @media screen and (min-width: 1440px) {
  }
`;
export const StyledTypographyH2 = styled(Typography)`
  color: #fafafa;
  font-feature-settings: 'liga' off;
  font-size: 28px;
  font-style: normal;
  font-weight: 600;
  line-height: 32px;
  letter-spacing: -0.56px;

  @media screen and (min-width: 768px) {
    font-size: 40px;
    line-height: 44px;
    letter-spacing: -0.8px;
  }
`;

export const StyledTypography = styled(Typography)`
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  text-transform: none;
  letter-spacing: -0.28px;

  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 24px;
    letter-spacing: -0.36px;
  }
`;

export const StyledBox = styled(Box)`
  position: absolute;
  top: 84px;
  left: 42px;
  width: 257px;
  height: 247px;
  flex-shrink: 0;
  border-radius: 257px;
  background: rgba(188, 230, 210, 0.4);
  filter: blur(104.8543701171875px);
  z-index: 2;
`;

export const StyledBoxBig = styled(Box)`
  position: absolute;
  top: 20px;
  left: -399px;
  width: 520px;
  height: 550px;
  flex-shrink: 0;
  border-radius: 550px;
  background: rgba(64, 112, 205, 0.5);
  filter: blur(104.8543701171875px);
  z-index: 1;
`;