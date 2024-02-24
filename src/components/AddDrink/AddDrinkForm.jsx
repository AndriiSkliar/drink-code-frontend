import { Wrapper } from './AddDrinkForm.styled';
import DrinkDescription from './DrinkDescription/DrinkDescription';
import DrinkIngredients from './DrinkIngredients/DrinkIngredients';
import Recipe from './Recipe/Recipe';
import * as Yup from 'yup';
import { Form, useFormik } from 'formik';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { initialValues } from './addDrinkFormInitials';

const AddDrinkForm = () => {
  const dispatch = useDispatch();
  const [errors, setErrors] = useState([]);
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
      const formData = new FormData();

      formData.append('drink', values.drink);
      formData.append('description', values.description);
      formData.append('category', values.category);
      formData.append('glass', values.glass);
      formData.append('alcoholic', values.alcoholic);
      formData.append('ingredients', values.ingredients);

      const ingredientsDrink = JSON.stringify(values.ingredients);
      formData.append('ingredients', ingredientsDrink);
      try {
        console.log(values);
      } catch (error) {
        console.error('Error message', error);
      }
    },
  });
  console.log('FORMIK', formik.values.drink);

  return (
    <form>
      <Wrapper>
        <DrinkDescription
          formik={formik} //change here
          errors={errors}
        />
        <DrinkIngredients formik={formik} errors={errors} />
        <Recipe formik={formik} errors={errors} />

        <button type="submit">Add</button>
      </Wrapper>
    </form>
  );
};

export default AddDrinkForm;
