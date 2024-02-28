import { Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { ToastContainer, toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import 'react-toastify/dist/ReactToastify.css';
import {
  SubscrForm,
  SubscrFormText,
  SubscrFormInput,
  SubscrFormBtn,
} from './SubscriptionForm.styled';
import {
  ErrorSvgStyled,
  CheckSvgStyled,
  InputWrapper,
  ErrorText,
} from '../../SignUp/SignForm.styled';
import { authOperations } from '../../../redux/auth/auth.operations';

const initialValues = { email: '' };
const EmailSchema = Yup.object().shape({
  email: Yup.string()
    .matches(
      /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
      'Emails: digits, letters, . - _ only, e.g., example@mail.com.'
    )
    .email('Invalid email format, example@mail.com')
    .required('Email is required'),
});

export const SubscriptionForm = () => {
  const dispatch = useDispatch();

  const handleSubscrSubmit = (values, action) => {
    const { email } = values;
    dispatch(authOperations.subscribeEmail({ email }))
      .unwrap()
      .then(() => {
        toast.info('Congrats! You have successfully subscribed');
        action.resetForm();
      })
      .catch((err) => {
        toast.warn(err.response.data.message);
      });
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={EmailSchema}
      onSubmit={handleSubscrSubmit}
    >
      {({ values, errors, touched }) => (
        <SubscrForm>
          <SubscrFormText>
            Subscribe up to our newsletter. Be in touch with latest news and
            special offers, etc.
          </SubscrFormText>
          <InputWrapper>
            <SubscrFormInput
              id="email"
              name="email"
              placeholder="Enter the email"
              error={errors.email && touched.email ? 'true' : 'false'}
              success={values.email && !errors.email ? 'true' : 'false'}
            />
            <ErrorMessage
              name="email"
              render={(message) => <ErrorText>{message}</ErrorText>}
            />
            {errors.email && touched.email ? (
              <ErrorSvgStyled />
            ) : values.email && !errors.email ? (
              <CheckSvgStyled />
            ) : null}
          </InputWrapper>
          <SubscrFormBtn
            type="submit"
            disabled={values.email === '' || errors.email ? true : false}
          >
            Subscribe
          </SubscrFormBtn>
          <ToastContainer position="bottom-right" autoClose={3000} />
        </SubscrForm>
      )}
    </Formik>
  );
};
