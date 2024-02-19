import {
  FooterContainer,
  LogoAndSocialContainer,
  FooterNavContainer,
  NavAndFormContainer,
  DocsLink,
  DocsContainer,
  DocsSubContainer,
} from './Footer.styled';
import { Logo } from './Logo/Logo';
import { FooterNavigation } from './FooterNavigation/FooterNavigation';
import { SocialLinks } from '../SocialLinks/SocialLinks';
import { SubscriptionForm } from './SubscriptionForm/SubscriptionForm';
// import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <FooterContainer>
      <NavAndFormContainer>
        <FooterNavContainer>
          <LogoAndSocialContainer>
            <Logo />
            <SocialLinks />
          </LogoAndSocialContainer>
          <FooterNavigation />
        </FooterNavContainer>
        <SubscriptionForm />
      </NavAndFormContainer>
      <DocsContainer>
        <DocsLink
          href="https://drink-code-backend.onrender.com/api-docs/#/"
          target="blank"
        >
          ©2023 Drink Master. All rights reserved.
        </DocsLink>
        <DocsSubContainer>
          <DocsLink
            href="/drink-code-frontend/src/assets/docs/PrivacyPolicy.txt"
            download
          >
            Privacy Policy
          </DocsLink>
          <DocsLink
            href="/drink-code-frontend/src/assets/docs/PublicAgreement.txt"
            download
          >
            Terms of Service
          </DocsLink>
        </DocsSubContainer>
      </DocsContainer>
    </FooterContainer>
  );
};
