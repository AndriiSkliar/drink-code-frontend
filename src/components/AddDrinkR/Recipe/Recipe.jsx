import { RecipeField, RecipeTitle } from './Recipe.styled';

const Recipe = ({ formik }) => {
  return (
    <>
      <RecipeTitle>Recipe Preparation</RecipeTitle>
      <RecipeField
        name="instruction"
        placeholder="Enter the recipe"
        rows={6}
        value={formik.values.instruction}
        onChange={formik.handleChange}
      />
    </>
  );
};

export default Recipe;
