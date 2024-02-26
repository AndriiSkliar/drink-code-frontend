import * as Yup from 'yup';
import { useFormik } from 'formik';
import { useState } from 'react';
import { toast } from 'react-toastify';

import DrinkDescription from './DrinkDescription/DrinkDescription';
import Ingredients from './Ingredients/Ingredients';
import Recipe from './Recipe/Recipe';
import { addDrinktoDB } from '../../api/addDrink';
import { initialValues } from './initianValues';
import { SectionTitle, SubmitButton, AddForm } from './AddDrinkForm.styled';

const AddDrinkForm = () => {
  const [fileAvatar, setFileAvatar] = useState();
  const [pictureActive, setPictureActive] = useState(false);
  const formik = useFormik({
    initialValues,
    validationSchema: Yup.object().shape({
      drink: Yup.string().required('The drink field is required'),
      description: Yup.string().required('The description field is required'),
      category: Yup.string().required('The category field is required'),
      glass: Yup.string().required('The glass field is required'),
      alcoholic: Yup.string().required('Select the type of required'),
      ingredients: Yup.array().required('This field is required'),
    }),
    onSubmit: async (values, { resetForm }) => {
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
        const resp = await addDrinktoDB(formData);
        if (resp.message === 'Drink Created') {
          toast.success(`Drink Created`, {
            position: 'top-right',
            autoClose: 5000,
          });
          setFileAvatar('');
          setPictureActive(false);
          resetForm();
        }
      } catch (error) {
        console.error('Error message', error);
      }
    },
  });

  return (
    <section>
      <>
        <SectionTitle>Add Drink</SectionTitle>
        <AddForm onSubmit={formik.handleSubmit}>
          <DrinkDescription
            formik={formik}
            setFileAvatar={setFileAvatar}
            pictureActive={pictureActive}
            setPictureActive={setPictureActive}
          />
          <Ingredients formik={formik} />
          <Recipe formik={formik} />
          <SubmitButton type="submit">Add</SubmitButton>
        </AddForm>
      </>
    </section>
  );
};

export default AddDrinkForm;
