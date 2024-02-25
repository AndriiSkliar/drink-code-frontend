import * as Yup from 'yup';
import { useFormik } from 'formik';
import { useState } from 'react';

import DrinkDescription from './DrinkDescription/DrinkDescription';
import Ingredients from './Ingredients/Ingredients';
import Recipe from './Recipe/Recipe';
import { AddDrinktoDB } from '../../api/addDrink';
import { initialValues } from './initianValues';

const AddDrinkForm = () => {
  const [fileAvatar, setFileAvatar] = useState();
  const formik = useFormik({
    initialValues,
    validationSchema: Yup.object().shape({
      drink: Yup.string().required('This field is mandatory'),
      description: Yup.string().required('This field is mandatory'),
      category: Yup.string().required('This field is required'),
      glass: Yup.string().required('This field is mandatory'),
      alcoholic: Yup.string().required('Select the type of cocktail'),
      ingredients: Yup.array().required('This field is mandatory'),
    }),
    onSubmit: async (values) => {
      console.log('FORMIK', formik.values);
      const formData = new FormData();
      formData.append('drinkThumb', fileAvatar);
      formData.append('drink', values.drink);
      formData.append('description', values.description);
      formData.append('category', values.category);
      formData.append('glass', values.glass);
      formData.append('alcoholic', values.alcoholic);
      formData.append('instruction', values.instruction);
      values.ingredients.forEach((ingredient, index) => {
        formData.append(`ingredients[${index}][title]`, ingredient.title);
        formData.append(`ingredients[${index}][measure]`, ingredient.measure);
      });
      try {
        const resp = await AddDrinktoDB(formData);
        console.log('RESP', resp);
      } catch (error) {
        console.error('Error message', error);
      }
    },
  });

  return (
    <section>
      <div className="container">
        <h1>Add Drink</h1>
        <form onSubmit={formik.handleSubmit}>
          <DrinkDescription formik={formik} setFileAvatar={setFileAvatar} />
          <Ingredients formik={formik} />
          <Recipe formik={formik} />
          <button type="submit">SEND</button>
        </form>
      </div>
    </section>
  );
};

export default AddDrinkForm;
