import {
  WelcomeWrapper,
  WelcomeTitle,
  WelcomeText,
  Container,
  ButtonDiv,
  SignUpBut,
  SignInBut,
} from './Welcome.styled';


const Welcome = () => {
  return (
    <WelcomeWrapper>
        <Container>
          <WelcomeTitle>Welcome to the app!</WelcomeTitle>
          <WelcomeText>
            This app offers more than just a collection of recipes - it is
            designed to be your very own digital cookbook. You can easily save
            and retrieve your own recipes at any time.
          </WelcomeText>
          <ButtonDiv>
            <SignUpBut to="/signup">Sign Up</SignUpBut>
            <SignInBut to="/signin">Sign In</SignInBut>
          </ButtonDiv>
        </Container>
    </WelcomeWrapper>
  );
};

export default Welcome;