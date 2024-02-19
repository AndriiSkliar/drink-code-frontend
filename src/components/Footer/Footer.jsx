import {
  FooterContainer,
  LogoAndSocialContainer,
  FooterNavContainer,
  NavAndFormContainer,
} from './Footer.styled';
import { Logo } from './Logo/Logo';
import { FooterNavigation } from './FooterNavigation/FooterNavigation';
import { SocialLinks } from '../SocialLinks/SocialLinks';
import { SubscriptionForm } from './SubscriptionForm/SubscriptionForm';
import { Link } from 'react-router-dom';

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
      <div>
        <Link to={''} target="blank">
          ©2023 Drink Master. All rights reserved.
        </Link>
        <div>
          <Link>Privacy Policy</Link>
          <Link>Terms of Service</Link>
        </div>
      </div>
    </FooterContainer>
  );
};
