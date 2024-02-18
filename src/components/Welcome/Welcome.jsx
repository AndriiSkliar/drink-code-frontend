import {
  WelcomeWrapper,
  H2,
  P,
  Container,
  ButtonDiv,
  SignUpBut,
  SignInBut,
} from './Welcome.styled';


const Welcome = () => {
  return (
    <WelcomeWrapper>
        <Container>
          <H2>Welcome to the app!</H2>
          <P>
            This app offers more than just a collection of recipes - it is
            designed to be your very own digital cookbook. You can easily save
            and retrieve your own recipes at any time.
          </P>
          <ButtonDiv>
            <SignUpBut to="/signup">Sign Up</SignUpBut>
            <SignInBut to="/signin">Sign In</SignInBut>
          </ButtonDiv>
        </Container>
    </WelcomeWrapper>
  );
};

export default Welcome;