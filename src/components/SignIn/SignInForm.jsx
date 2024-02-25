// @ts-nocheck
import { ErrorMessage, Formik } from 'formik';
import { ToastContainer, toast, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from '../../redux/auth/authOperations';
import * as Yup from 'yup';
import {
  Container,
  Input,
  InputWrapper,
  AuthForm,
  Title,
  Button,
  ToggleButton,
  ErrorText,
  ErrorSvgStyled,
  CheckSvgStyled,
  Link,
} from '../SignUp/SignForm.styled';
import { ReactComponent as ShowPassword } from '../../assets/images/signSvg/eye.svg';
import { ReactComponent as HidePassword } from '../../assets/images/signSvg/eye-off.svg';
import { WelcomeWrapper } from '../Welcome/Welcome.styled';

const initialValues = { email: '', password: '' };
const schema = Yup.object().shape({
  email: Yup.string()
    .matches(
      /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
      'Emails: digits, letters, . - _ only, e.g., example@mail.com.'
    )
    .email('Invalid email format, example@mail.com')
    .required('Email is required'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters long')
    .required('Password is required')
    .matches(/[a-zA-Z]/, 'Password must contain at least one letter')
    .matches(/[0-9]/, 'Password must contain at least one number'),
});

export default function SigninForm() {
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const dispatch = useDispatch();

  const handleSubmit = values => {
    const { email, password } = values;
    dispatch(authOperations.signIn({ email, password }))
      .unwrap()
      .then(() => {
        toast.success(`Success`, {
          position: "top-right",
          autoClose: 1500,
        });
      })
      .catch(() => {
        toast.error(`Something went wrong. Try again`, {
          position: "top-right",
          autoClose: 1500,
        });
      });
  };

  return (
    <WelcomeWrapper>
      <Container>
        <ToastContainer transition={Slide} />
        <Title>Sign In</Title>
        <Formik
          initialValues={initialValues}
          validationSchema={schema}
          onSubmit={handleSubmit}
        >
          {({ values, errors, touched }) => (
            <AuthForm>
              <>
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
                    error={
                      errors.password && touched.password ? 'true' : 'false'
                    }
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
              </>

                <Button type="submit">Sign In</Button>
                <Link to="/signup">Sign Up</Link>
            </AuthForm>
          )}
        </Formik>
      </Container>
    </WelcomeWrapper>
  );
}