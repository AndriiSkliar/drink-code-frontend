import { Box } from '@mui/material';
import {
  StyledDiv,
  StyledSection,
  StyledButton,
  StyledTypography,
  StyledBox,
  StyledBoxBig,
  StyledTypographyH2
} from './Welcome.styled';
import { Link } from 'react-router-dom';

const Welcome = () => {
  return (
    <StyledSection>
      <StyledDiv>
        <StyledBoxBig></StyledBoxBig>
        <StyledBox></StyledBox>
        <StyledTypographyH2
          variant="h2"
          sx={{
            marginBottom: '14px',

          }}
        >
          Welcome to the app!
        </StyledTypographyH2>
        <StyledTypography
          sx={{
            marginBottom: '40px',
          }}
        >
          This app offers more than just a collection of recipes - it is
          designed to be your very own digital cookbook. You can easily save and
          retrieve your own recipes at any time.
        </StyledTypography>

        <Box sx={{ display: 'flex', gap: '14px', justifyContent: 'center' }}>
          <Link to="/signup">
            <StyledButton type="button">
              <StyledTypography>Sign Up</StyledTypography>
            </StyledButton>
          </Link>
          <Link to="/signin">
            <StyledButton type="button">
              <StyledTypography>Sign In</StyledTypography>
            </StyledButton>
          </Link>
        </Box>
      </StyledDiv>
    </StyledSection>
  );
};

export default Welcome;