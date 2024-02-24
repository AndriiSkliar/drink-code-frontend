import {
  Div,
  Title,
  TextareaDiv,
  Textarea,
  MockPlaceholder,
  ErrorText,
  ErrorIcon,
} from './Recipe.styled';

import { useSelector } from 'react-redux';

const Recipe = ({ formik, errors, theme }) => {
  // const persistedForm = useSelector(selectForm);
  // const form = persistedForm.form; // change here

  return (
    <Div>
      <Title theme={theme}>Recipe Preparation</Title>
      <TextareaDiv></TextareaDiv>
      {formik.values.instructions ? (
        <MockPlaceholder theme={theme}>Enter the recipe</MockPlaceholder>
      ) : (
        <ErrorText>
          {!formik.values.instructions && errors.instructions}
          {!formik.values.instructions && errors.instructions && (
            <ErrorIcon>!</ErrorIcon>
          )}
        </ErrorText>
      )}
      <Textarea
        theme={theme}
        errors={errors.instructions}
        name="instructions"
        placeholder="Enter the recipe"
        rows={6}
        value={formik.values.instructions}
        onChange={formik.handleChange}
      />
    </Div>
  );
};
export default Recipe;
