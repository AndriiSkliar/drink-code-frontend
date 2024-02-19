import React from 'react';
import { useFormik } from 'formik';
import axios from 'axios';
const baseURL = 'https://drink-master-back-end.onrender.com';

export const SubscriptionForm = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
    },
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
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="email">
        Subscribe up to our newsletter. Be in touch with latest news and special
        offers, etc.
      </label>
      <input
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        value={formik.values.email}
        placeholder="Enter the email"
      />
      <button type="submit">Subscribe</button>
    </form>
  );
};
