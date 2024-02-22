import styled from 'styled-components';

export const FooterContainer = styled.footer`
  border-top: 1px solid var(--primary-text-color-02);
  background-color: var(--footer-bg);
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

export const FooterNavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  /* gap: 90px; */

  @media (min-width: 768px) {
    flex-direction: column;
    justify-content: flex-start;
    gap: 46px;
  }

  @media (min-width: 1280px) {
    flex-direction: row;
    gap: 350px;
  }
`;

export const NavAndFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  gap: 50px;
  margin-bottom: 80px;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const DocsLink = styled.a`
  color: var(--primary-text-color-05);
  font-size: 12px;
  transition: color 250ms linear;

  @media (min-width: 768px) {
    font-size: 14px;
  }

  &:hover,
  &:focus {
    color: var(--primary-text-color-footer);
  }
`;

export const DocsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const DocsSubContainer = styled.div`
  display: flex;
  gap: 14px;

  @media (min-width: 768px) {
    gap: 18px;
    margin-right: 90px;
  }
`;
