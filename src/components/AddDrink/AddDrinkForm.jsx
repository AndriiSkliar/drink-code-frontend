import { Wrapper, Button } from './AddDrinkForm.styled';
import DrinkDescription from './DrinkDescription/DrinkDescription';
import DrinkIngredients from './DrinkIngredients/DrinkIngredients';
import RecipePreparation from './Recipe/Recipe';

import {Formik, Form} from 'formik';

import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useMemo } from 'react';

import { initialValues } from './addDrinkFormInitials';


import { useNavigate } from 'react-router-dom';


const addDrinkSchema = () =>({
  drink: string().trim().required('This field is required'),
  description: string().required('This field is required'),
  category: string().required('This field is required'),
  glass: string().required('This field is required'),
  alcoholic: string()
    .matches(/(Alcoholic|Non alcoholic)/)
    .required('This field is required'),
  ingredients: array().of(
    object({
      title: string().required('This field is required'),
      measure: string().required('Required'),
    }),
  ),
  instructions: string().required('This field is required'),
});

 const OptionsFromUsingId = (collection) =>
  collection.map(({ title, _id }) => ({
    value: _id,
    label: title,
  }));

  const filters = () => {
    const categories = useSelector(selectCategories);
    const ingredients = useSelector(selectIngredients);
    const glasses = useSelector(selectGlasses);
  
    return { categories, ingredients, glasses };
  };



const AddDrinkForm = () => {
  const {ingredients} = filters();
  const authToken = useSelector(authHeaderToken);
  const addedIngredients = [];

  const ingredientsOptions = useMemo(
    () => OptionsFromUsingId(ingredients ?? []),
    [ingredients]
  );

  const onSubmit = (e) => {
    e.preventDefault();
    addedIngredients.length = 0;

    const formData = new FormData(e.currentTarget);

    console.log(formData);

    formData.getAll('ingredientId').forEach((ingredientId, index) => {
      const measure = formData.getAll('measure')[index];
      addedIngredients.push({
        title: ingredientsOptions.find(
          (option) => option.value === ingredientId
        ).label,
        measure,
        ingredientId,
      });
    });

    formData.delete('ingredientId');
    formData.delete('measure');

    addedIngredients.forEach((addedIngredient, index) => {
      formData.append(`ingredients[${index}][title]`, addedIngredient.title);
      formData.append(
        `ingredients[${index}][measure]`,
        addedIngredient.measure
      );
      formData.append(
        `ingredients[${index}][ingredientId]`,
        addedIngredient.ingredientId
      );
    });

    formData.forEach((value, name) => {
      console.log('name: ', name);
      console.log('value: ', value);
    });

    fetch('https://drink-code-backend.onrender.com', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
      body: formData,
    }).then((response) => {
      if (response.ok) {
        console.log('status 200');
      } else {
        console.log('Error:', response.statusText);
      }
    });
  };

  return (
    <Wrapper>
      <Formik
        initialValues={formValues}
        validationSchema={addDrinkSchema}
        validateOnChange={false}
        validateOnBlur={false}
        onSubmit={submitHandler}
      >
        {({ setFieldValue, errors }) => (
          <Form>
            <DrinkDescriptionFields
              setFile={setFile}
              onChangeHandler={onChangeHandler}
              setFieldValue={setFieldValue}
              errors={errors}
              theme={theme}
            />
            <DrinkIngredientsFields
              onChangeHandler={onChangeHandler}
              setFieldValue={setFieldValue}
              errors={errors}
              wrongIngredients={wrongIngredients}
              theme={theme}
            />
            <RecipePreparation
              onChangeHandler={onChangeHandler}
              setFieldValue={setFieldValue}
              errors={errors}
              theme={theme}
            />
            <Button
              theme={theme}
              type="submit"
              disabled={isLoadingOwnDrink === true}
              title="Add"
            >
              Add
            </Button>
          </Form>
        )}
      </Formik>
    </Wrapper>
  );
};
export default AddDrinkForm;