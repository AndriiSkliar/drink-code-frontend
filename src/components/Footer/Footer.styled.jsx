import styled from 'styled-components';

export const FooterContainer = styled.footer`
  border-top: 1px solid rgba(243, 243, 243, 0.2);
  background-color: #0a0a11;
  padding: 40px 20px 20px;

  @media (min-width: 768px) {
    padding: 80px 30px 28px;
  }

  @media (min-width: 1280px) {
    padding: 80px 100px 28px;
  }
`;

export const LogoAndSocialContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (min-width: 768px) {
    gap: 28px;
  }

  @media (min-width: 1280px) {
    gap: 40px;
  }
`;

export const FooterAllNavContainer = styled.div`
  display: flex;
  justify-content: space-between;

  @media (min-width: 768px) {
    flex-direction: column;
    justify-content: flex-start;
    gap: 46px;
  }

  @media (min-width: 1280px) {
    flex-direction: row;
    gap: 400px;
  }
`;
