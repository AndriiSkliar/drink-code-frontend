import INGREDIENTS from './ingredients.json';
import { useState, useEffect } from 'react';
import {
  DescHelperContainer,
  IngrTitle,
  ButtonContainer,
  QuantityButton,
  TitleContainer,
  IngredientSelect,
  SelectContainer,
  SelectInnerContainer,
  MeasureInput,
  DeleteMeasureBtn,
} from './Ingredietns.styled';

const Ingredients = ({ formik }) => {
  const [ingredients, setIngredients] = useState([
    {
      title: '',
      measure: '',
      ingredientId: '',
    },
  ]);
  useEffect(() => {
    formik.setValues({
      ...formik.values,
      ingredients: ingredients,
    });
  }, [ingredients, formik.setValues]);

  const handleInputChange = (index, event) => {
    const { name, value } = event.target;
    const newIngredients = [...ingredients];
    newIngredients[index][name] = value;
    setIngredients(newIngredients);
  };

  const handleSelectChange = (index, event) => {
    const selectedIndex = event.target.selectedIndex;
    const selectedIngredient = INGREDIENTS[selectedIndex];
    const { name, value } = event.target;
    const newIngredients = [...ingredients];
    newIngredients[index] = {
      ...newIngredients[index],
      [name]: value,
      ingredientId: selectedIngredient._id.$oid,
    };
    setIngredients(newIngredients);
  };

  const handleRemoveIngredient = (elID) => {
    const newIngredients = [...ingredients];
    const filteredArray = newIngredients.filter(
      (ingr) => ingr.ingredientId !== elID
    );
    setIngredients(filteredArray);
  };

  const handleAddIngredient = () => {
    setIngredients([
      ...ingredients,
      { title: '', measure: '', ingredientId: '' },
    ]);
  };

  return (
    <DescHelperContainer>
      <TitleContainer>
        <IngrTitle>Ingredients</IngrTitle>
        <ButtonContainer>
          <QuantityButton
            type="button"
            onClick={handleRemoveIngredient}
            disabled={ingredients.length === 1}
          >
            -
          </QuantityButton>
          <p>{ingredients.length}</p>
          <QuantityButton type="button" onClick={handleAddIngredient}>
            +
          </QuantityButton>
        </ButtonContainer>
      </TitleContainer>
      {ingredients.map((ingredient, index) => (
        <SelectContainer key={index}>
          <SelectInnerContainer>
            <IngredientSelect
              name="title"
              value={ingredient.title}
              onChange={(e) => handleSelectChange(index, e)}
            >
              <option value="">Select ingredients</option>
              {INGREDIENTS.map((ingredient) => (
                <option
                  key={ingredient._id.$oid}
                  data-id={ingredient._id.$oid}
                  value={ingredient.title}
                >
                  {ingredient.title}
                </option>
              ))}
            </IngredientSelect>
            <MeasureInput
              name="measure"
              type="text"
              value={ingredient.measure}
              onChange={(e) => handleInputChange(index, e)}
              required
            />
          </SelectInnerContainer>
          <DeleteMeasureBtn
            type="button"
            onClick={() => handleRemoveIngredient(ingredient.ingredientId)}
            disabled={ingredients.length === 1}
          >
            x
          </DeleteMeasureBtn>
        </SelectContainer>
      ))}
    </DescHelperContainer>
  );
};

export default Ingredients;
