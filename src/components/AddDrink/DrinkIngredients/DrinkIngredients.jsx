import {
  Wrapper,
  DivTop,
  Title,
  DivIncrement,
  SpanIncrement,
  Button,
  ButtonIncr,
  List,
} from './DrinkIngredients.styled';

import { useSelector } from 'react-redux';

import IngredientItem from './IngredientsItem/IngridientsItem';

const DrinkIngredients = ({
  formik,
  onChangeHandler,
  setFieldValue,
  errors,
  wrongIngredients,
}) => {
  // const persistedForm = useSelector(selectForm);
  // const form = persistedForm.form; // change here

  // const ingredientsData = useSelector(selectIngredients); //change here
  const ingredientsData = [
    { value: "g", label: "g" },
    { value: "kg", label: "kg" },
    { value: "l", label: "l" },
    { value: "ml", label: "ml" },
    { value: "tbs", label: "tbs" },
    { value: "tsp", label: "tsp" },
    { value: "pcs", label: "pcs" },
    { value: "pin", label: "pin" },
    { value: "qrt ", label: "qrt " },
  ]; // Не працює селектор для списку інградієнтів
  console.log(ingredientsData[0].value);
  // Tablica składników jest zapisywana do zmiany, w zależności od ograniczeń Alcoholic/Non alcoholic
  const ingredientOptions = ingredientsData.filter((el) =>
    formik.values.alcoholic === 'Alcoholic' ? el.alcohol : el.alcohol === 'No'
  );

  // Tablica składników jest rejestrowana podczas zmiany, biorąc pod uwagę fakt, że w bazie danych znajdują się nienazwane składniki
  const ingredientTitleArray = ingredientOptions.filter((el) => el.title);

  // Tablica obiektów składników jest zapisywana do przesunięcia, w postaci niezbędnej do pracy selekcji.
  const ingredientsForSelect = ingredientTitleArray.map((item) => {
    return { value: item.title, label: item.title, alcohol: item.alcohol };
  });

  const increment = () => {
    const newArray = [...formik.values.ingredients];
    newArray.push({ title: '', measure: '', alcohol: '' });
    onChangeHandler(newArray, 'ingredients', setFieldValue);
  };

  const decrement = (index) => {
    if (formik.values.ingredients.length === 1) {
      return;
    }

    if (index || index === 0) {
      const newArray = [...formik.values.ingredients];
      newArray.splice(index, 1);
      onChangeHandler(newArray, 'ingredients', setFieldValue);
    } else {
      const newArray = [...formik.values.ingredients];
      newArray.pop();
      onChangeHandler(newArray, 'ingredients', setFieldValue);
    }
  };

  return (
    <Wrapper>
      <DivTop>
        <Title>Ingredients</Title>
        <DivIncrement>
          <Button type="button" onClick={() => decrement()}>
            ---
          </Button>
          <SpanIncrement >
            {formik.values.ingredients.length}
          </SpanIncrement>
          <ButtonIncr type="button" onClick={() => increment()}>
            +
          </ButtonIncr>
        </DivIncrement>
      </DivTop>
      <List>
        {formik.values.ingredients.map((el, index) => (
          <li key={index}>
            <IngredientItem
      
              chosenIngredients={formik.values.ingredients}
              onChangeHandler={formik.handleChange}
              setFieldValue={setFieldValue}
              ingredients={ingredientsForSelect}
              deleteIngredient={decrement}
              index={index}
              chosenIngredientSelect={{
                value: formik.values.ingredients[index].title,
                label: formik.values.ingredients[index].title,
              }}
              errors={errors}
              wrongIngredients={wrongIngredients}
            />
          </li>
        ))}
      </List>
    </Wrapper>
  );
};
export default DrinkIngredients;
