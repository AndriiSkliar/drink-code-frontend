import React from 'react';
import { useFormik } from 'formik';
import axios from 'axios';
import * as Yup from 'yup';
import {
  SubscrForm,
  SubscrFormText,
  SubscrFormInput,
  SubscrFormBtn,
} from './SubscriptionForm.styled';
const baseURL = 'https://drink-master-back-end.onrender.com';

export const SubscriptionForm = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validationSchema: Yup.object().shape({
      email: Yup.string()
        .email('Invalid email address')
        .required('Please enter email'),
    }),
    onSubmit: async (values) => {
      try {
        const responce = await axios.post(`${baseURL}/subscribe`, {
          email: values.email,
        });

        return responce;
      } catch (err) {
        console.log(err);
      }
    },
  });

  return (
    <SubscrForm onSubmit={formik.handleSubmit}>
      <SubscrFormText>
        Subscribe up to our newsletter. Be in touch with latest news and special
        offers, etc.
      </SubscrFormText>
      <SubscrFormInput
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        value={formik.values.email}
        placeholder="Enter the email"
      />
      <SubscrFormBtn
        type="submit"
        disabled={formik.values.email === '' ? true : false}
      >
        Subscribe
      </SubscrFormBtn>
    </SubscrForm>
  );
};
