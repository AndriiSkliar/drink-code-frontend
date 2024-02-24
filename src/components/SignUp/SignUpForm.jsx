import { Formik, ErrorMessage } from 'formik';
import { ToastContainer, toast, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from '../../redux/auth/authOperations';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import * as Yup from 'yup';
import {
  Container,
  AuthForm,
  Input,
  InputWrapper,
  Title,
  Button,
  ToggleButton,
  ErrorText,
  ErrorSvgStyled,
  CheckSvgStyled,
  Link,
} from './SignForm.styled';

import Birthday from './DatePicker.styled';
import { ReactComponent as ShowPassword } from '../../assets/images/signSvg/eye.svg';
import { ReactComponent as HidePassword } from '../../assets/images/signSvg/eye-off.svg';
import { WelcomeWrapper } from '../Welcome/Welcome.styled';

const initialValues = {
  name: '',
  birthday: '',
  email: '',
  password: '',
};

const schema = Yup.object().shape({
  name: Yup.string()
    .required('Name is required')
    .matches(/[A-Za-z]+/, 'Name must contain at least one letter')
    .matches(/^[A-Za-z\s]+$/, 'Name must contain only letters and spaces'),
  birthday: Yup.date().required('Date of Birth is required')
    .max(new Date(),'Please enter correct date'),
  email: Yup.string()
    .matches(
      /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
      'Emails: digits, letters, . - _ only, e.g., example@mail.com.'
    )
    .email('Invalid email format, example@mail.com')
    .required('Email is required, example@mail.com.'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters long')
    .required('Password is required. Example:Password123')
    .matches(/[a-zA-Z]/, 'Password must contain at least one letter')
    .matches(/[0-9]/, 'Password must contain at least one number'),
});

function SignUpForm() {
  const [showPassword, setShowPassword] = useState(false);

  const dispatch = useDispatch();

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = values => {
    const { name, birthday, email, password } = values;

    dispatch(authOperations.signUp({ name, birthday, email, password }))
      .unwrap()
      .then(() => {
        toast.success(`A message with a verification has been sent to your email`, {
          position: "top-right",
          autoClose: 5000,
        });
      })
      .catch((error) => {
        toast.error(error, {
          position: "top-right",
          autoClose: 1500,
        });
      });
  };

  return (
    <WelcomeWrapper>
      <Container>
        <ToastContainer transition={Slide} />
        <Title>Sign Up</Title>
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={schema}
        >
          {({ values, errors, touched }) => (
            <AuthForm>
              <InputWrapper>
                <Input
                  type="text"
                  name="name"
                  placeholder="Name"
                  error={errors.name && touched.name ? 'true' : 'false'}
                  success={values.name && !errors.name ? 'true' : 'false'}
                />
                <ErrorMessage
                  name="name"
                  render={message => <ErrorText>{message}</ErrorText>}
                />
                {errors.name && touched.name ? (
                  <ErrorSvgStyled />
                ) : values.name && !errors.name ? (
                  <CheckSvgStyled />
                ) : null}
              </InputWrapper>

              <InputWrapper>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <Birthday />
                </LocalizationProvider>
                <ErrorMessage
                  name="birthday"
                  render={message => <ErrorText>{message}</ErrorText>}
                />
              </InputWrapper>

              <InputWrapper>
                <Input
                  type="email"
                  name="email"
                  placeholder="Email"
                  error={errors.email && touched.email ? 'true' : 'false'}
                  success={values.email && !errors.email ? 'true' : 'false'}
                />
                <ErrorMessage
                  name="email"
                  render={message => <ErrorText>{message}</ErrorText>}
                />
                {errors.email && touched.email ? (
                  <ErrorSvgStyled />
                ) : values.email && !errors.email ? (
                  <CheckSvgStyled />
                ) : null}
              </InputWrapper>

              <InputWrapper>
                <Input
                  type={showPassword ? 'text' : 'password'}
                  value={values.password}
                  name="password"
                  placeholder="Password"
                  error={errors.password && touched.password ? 'true' : 'false'}
                  success={
                    values.password && !errors.password ? 'true' : 'false'
                  }
                />
                <ErrorMessage
                  name="password"
                  render={message => <ErrorText>{message}</ErrorText>}
                />
                {errors.password && touched.password && !values.password && (
                  <ErrorSvgStyled />
                )}
                <ToggleButton type="button" onClick={handleTogglePassword}>
                  {values.password ? (
                    showPassword ? (
                      <ShowPassword />
                    ) : (
                      <HidePassword />
                    )
                  ) : null}
                </ToggleButton>
              </InputWrapper>

              <Button type="submit">Sign Up</Button>
              <Link to="/signin">Sign In</Link>
            </AuthForm>
          )}
        </Formik>
      </Container>
    </WelcomeWrapper>
  );
}

export default SignUpForm;