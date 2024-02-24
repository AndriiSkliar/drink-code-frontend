import {
  Wrapper,
  Input,
  Button,
  ErrorText,
  ErrorIcon,
} from './IngridientsItem.styled';

const IngredientItem = ({
  chosenIngredients,
  ingredients,
  index,
  onChangeHandler,
  setFieldValue,
  deleteIngredient,
  chosenIngredientSelect,
  errors,
  wrongIngredients,
  theme,
}) => {
  // Funkcja złożona kontrolowanego przetwarzania dwóch wsadów (składnika i jego ilości)
  const onChangeIngredientHandler = (payload, field) => {
    let tempArray = [...chosenIngredients];

    const freshData =
      field === 'title'
        ? {
            [field]: payload,
            alcohol: ingredients[index].alcohol,
          }
        : {
            [field]: payload,
          };

    tempArray[index] = tempArray[index]
      ? Object.assign({}, tempArray[index], freshData)
      : freshData;

    onChangeHandler(tempArray, 'ingredients', setFieldValue);
  };

  return (
    <Wrapper>
      <select>
        {/* theme={theme}
        name="title" */}
        {/* options={ingredients}
        value=
        {chosenIngredients[index].title === '' ? null : chosenIngredientSelect}
        onChangeIngredientHandler={onChangeIngredientHandler}
        setFieldValue={setFieldValue}
        errors={errors?.ingredients}
        wrongIngredient=
        {wrongIngredients ? wrongIngredients[index]?.title : null} // coment here */}
      </select>
      <ErrorText>
        {!chosenIngredients[index]?.title &&
          errors?.ingredients?.length > 0 &&
          errors.ingredients[index]?.title}
        {wrongIngredients &&
          chosenIngredients[index]?.alcohol === 'Yes' &&
          `That ingredient is not fit the chosen type Alcoholic/Non alcoholic drink`}
        {errors?.ingredients?.length > 0 &&
          errors.ingredients[index]?.title && (
            <ErrorIcon value={chosenIngredients[index].title}>
              {chosenIngredients[index]?.title ? '✔' : '!'}
            </ErrorIcon>
          )}
      </ErrorText>
      <div>
        <Input
          theme={theme}
          errors={errors.ingredients}
          type="text"
          name="measure"
          placeholder="1 cl"
          title="measure"
          value={
            chosenIngredients[index].measure === ''
              ? ''
              : chosenIngredients[index].measure
          }
          onChange={(e) => {
            onChangeIngredientHandler(e.target.value, 'measure');
          }}
        />
        <ErrorText>
          {!chosenIngredients[index]?.measure &&
            errors?.ingredients?.length > 0 &&
            errors.ingredients[index]?.measure}
          {!chosenIngredients[index]?.measure &&
            errors?.ingredients?.length > 0 &&
            errors.ingredients[index]?.measure && (
              <ErrorIcon measure={'measure'}>
                {errors.ingredients ? '!' : '✔'}
              </ErrorIcon>
            )}
        </ErrorText>
      </div>

      <Button
        theme={theme}
        type="button"
        title="Remove ingredient"
        onClick={() => deleteIngredient(index)}
      >
        +
      </Button>
    </Wrapper>
  );
};
export default IngredientItem;
