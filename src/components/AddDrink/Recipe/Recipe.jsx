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

  
  const Recipe = ({
    onChangeHandler,
    setFieldValue,
    errors,
    theme,
  }) => {
    const persistedForm = useSelector(selectForm);
    const form = persistedForm.form;
  
    return (
      <Div>
        <Title theme={theme}>Recipe Preparation</Title>
        <TextareaDiv></TextareaDiv>
        {form.instructions ? (
          <MockPlaceholder theme={theme}>Enter the recipe</MockPlaceholder>
        ) : (
          <ErrorText>
            {!form.instructions && errors.instructions}
            {!form.instructions && errors.instructions && (
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
          value={form.instructions}
          onChange={(e) => {
            onChangeHandler(e.target.value, e.target.name, setFieldValue);
          }}
        />
      </Div>
    );
  };
  export default Recipe;