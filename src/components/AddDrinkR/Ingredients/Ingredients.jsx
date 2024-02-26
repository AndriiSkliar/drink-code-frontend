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
    const { name, value } = event.target;
    const newIngredients = [...ingredients];
    newIngredients[index][name] = value;
    setIngredients(newIngredients);
  };

  const handleRemoveIngredient = () => {
    const newIngredients = [...ingredients];
    newIngredients.pop();
    setIngredients(newIngredients);
  };

  const handleAddIngredient = () => {
    setIngredients([...ingredients, { title: '', measure: '' }]);
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
              {INGREDIENTS.map((ingredient) => (
                <option key={ingredient._id.$oid} value={ingredient.title}>
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
            onClick={() => handleRemoveIngredient(index)}
            disabled={ingredients.length === 1}
          >
            x
          </DeleteMeasureBtn>
        </SelectContainer>
      ))}
    </DescHelperContainer>
  );
  //   return (
  //     <>
  //       <h2>Ingredients</h2>
  //       <select name="ingredients" onChange={formik.handeChange}>
  //         {INGREDIENTS.map((ingredient) => {
  //           return (
  //             <option
  //               key={ingredient._id.$oid}
  //               id={ingredient._id.$oid}
  //               value={ingredient.title}
  //             >
  //               {ingredient.title}
  //             </option>
  //           );
  //         })}
  //       </select>
  //       <input
  //         name="measure"
  //         type="text"
  //         id="measure"
  //         value={formik.values.ingredients.measure}
  //         onChange={formik.handeChange}
  //       />
  //       <button type="button">x</button>
  //     </>
  //   );
};

export default Ingredients;
