import styled from 'styled-components';

export const NavigationHeader = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const MainHeader = styled.header`
  padding: 20px 22px;
  border-bottom: 2px solid var(--border-header);
  background-color: transparent;

  @media screen and (min-width: 768px) {
    padding: 28px 32px;
  }

  @media screen and (min-width: 1280px) {
    padding: 28px 100px;
  }
`;

export const MobileBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
