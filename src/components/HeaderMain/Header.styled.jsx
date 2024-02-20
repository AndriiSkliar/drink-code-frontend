import styled from 'styled-components';

export const NavigationHeader = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const MainHeader = styled.header`
  padding-top: 20px;
  padding-bottom: 20px;
  border-bottom: 2px solid rgba(243, 243, 243, 0.2);
`;

export const MobileBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ContainerHeader = styled.div`
  max-width: 768px;
  margin: 0 auto;
  padding: 0 10px;

  @media screen and (min-width: 375px) {
    padding: 0 20px;
  }

  @media screen and (min-width: 768px) {
    padding-left: 32px;
    padding-right: 32px;
  }

  @media screen and (min-width: 1280px) {
    max-width: 1280px;
    padding-left: 20px;
    padding-right: 20px;
  }
`;
