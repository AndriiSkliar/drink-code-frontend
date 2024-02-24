import {
  Wrapper,
  ImageThumb,
  DivAddImage,
  DivTranslucent,
  LabelTranslucent,
  Label,
  HiddenInput,
  SpanAddImage,
  DivDesription,
  Input,
  ErrorText,
  ErrorIconCategory,
  DivSelect,
  DivFlexSelect,
  SpanSelect,
  DivAlcoholic,
  LabelAlcoholic,
  LabelNonAlcoholic,
  RadioInput,
} from './DrinkDescryption.styled';
import { ErrorIcon } from '../Recipe/Recipe.styled';
import {
  getCategories,
  getGlasses,
} from '../../../redux/filters/operation.filters';
import { useState } from 'react';
import { useSelector } from 'react-redux';

export const DrinkDescription = ({
  formik, // change here
  setFile,
  onChangeHandler,
  setFieldValue,
  errors,
  theme,
}) => {
  const categories = useSelector(getCategories);
  const glassArray = useSelector(getGlasses);
  console.log('FormikInComponent', formik.errors);
  // const persistedForm = useSelector(selectForm); // coment here
  // const form = persistedForm.form; // coment here
  const user = useSelector((state) => state.auth.user); // Change here

  // if (
  //   fullYearsCount(user.birthday) === false &&
  //   form.alcoholic === 'Alcoholic'
  // ) {
  //   onChangeHandler('Non alcoholic', 'alcoholic', setFieldValue);
  // } // coment here
  const [uri, setUri] = useState();

  // Funkcja rejestrująca tablicę obiektów składników w formie wymaganej do zaznaczenia.
  // Zostanie on później zapisany do initial w celu ponownego użycia wszędzie tam, gdzie react-wybierze
  const selectOptions = (array) =>
    Array.isArray(array) &&
    array.map((item) => {
      return { value: item, label: item };
    });

  // Podgląd obrazu wybranego pliku
  const addImagePreview = (e) => {
    if (!e.target.files[0].type.startsWith('image/')) {
      throw Error(
        // change here, was HttpError
        400,
        `Please, upload image-type file, e.g. '.jpeg', '.png'`
      );
    }
    setFile(e.target.files[0]);
    setUri(URL.createObjectURL(e.target.files[0]));
  };

  return (
    <Wrapper>
      <ImageThumb uri={uri} theme={theme}>
        {uri ? (
          <DivTranslucent>
            <LabelTranslucent
              onClick={() => {
                setFile();
                setUri();
              }}
            >
              Without image
            </LabelTranslucent>
            <LabelTranslucent>
              Change
              <HiddenInput
                type="file"
                id="input"
                name="drinkThumb"
                accept="image/*"
                onChange={(e) => addImagePreview(e)}
              />
            </LabelTranslucent>
          </DivTranslucent>
        ) : (
          <DivAddImage>
            <Label theme={theme}>
              +
              <HiddenInput
                type="file"
                id="input"
                name="drinkThumb"
                accept="image/*"
                onChange={(e) => addImagePreview(e)}
              />
            </Label>

            <SpanAddImage>Add image</SpanAddImage>
          </DivAddImage>
        )}
      </ImageThumb>
      <div>
        <DivDesription>
          <div>
            <Input
              type="text"
              name="drink"
              placeholder="Enter item title"
              title="Enter item title"
              value={formik.values.drink}
              onChange={formik.handleChange}
              theme={theme}
            />
            <ErrorText errors={errors.drink} value={formik.values.drink}>
              {formik.values.drink && errors.drink}
              {formik.values.drink && errors.drink && <ErrorIcon>!</ErrorIcon>}
            </ErrorText>
          </div>
          <div>
            <Input
              type="text"
              name="description"
              placeholder="Enter about recipe"
              title="Enter about recipe"
              value={formik.values.description}
              onChange={formik.handleChange}
              theme={theme}
            />
            <ErrorText
              errors={errors.description}
              value={formik.values.description}
            >
              {!formik.values.description && errors.description}
              {!formik.values.description && errors.description && (
                <ErrorIcon>!</ErrorIcon>
              )}
            </ErrorText>
          </div>

          <DivSelect theme={theme}>
            <DivFlexSelect>
              <SpanSelect theme={theme}>Category</SpanSelect>
              <select name="category" onChange={formik.handleChange}>
                {/* // theme={theme} //change here name="category" options= */}
                {/* {selectOptions(categories)}
            value=
            {formik.values.category === ''
              ? null
              : {
                  value: formik.values.category,
                  label: formik.values.category,
                }} // change here */}
              </select>
            </DivFlexSelect>
            <ErrorText errors={errors.category} value={formik.values.category}>
              {!formik.values.category && errors.category}
              {!formik.values.category && errors.category && (
                <ErrorIconCategory>{errors.category && '!'}</ErrorIconCategory>
              )}
            </ErrorText>
          </DivSelect>

          <DivSelect>
            <DivFlexSelect>
              <SpanSelect theme={theme}>Glass</SpanSelect>
              <select name="glass" onChange={formik.handleChange}>
                {/* theme={theme} */}
                {/* {selectOptions(glassArray)}
            value=
            {formik.values.glass === ''
              ? null
              : { value: formik.values.glass, label: formik.values.glass }} // change here*/}
              </select>
            </DivFlexSelect>
            <ErrorText errors={errors.glass} value={formik.values.glass}>
              {!formik.values.glass && errors.glass}
              {!formik.values.glass && errors.glass && (
                <ErrorIconCategory>!</ErrorIconCategory>
              )}
            </ErrorText>
          </DivSelect>
        </DivDesription>

        <DivAlcoholic theme={theme}>
          <LabelAlcoholic isAlcoholic={formik.values.alcoholic}>
            <RadioInput
              theme={theme}
              type="radio"
              value="Alcoholic"
              name="alcoholic"
              checked={formik.values.alcoholic === 'Alcoholic' ? true : false}
              onChange={(e) => {
                onChangeHandler(e.target.value, 'alcoholic', setFieldValue);
              }}
            />
            Alcoholic
          </LabelAlcoholic>
          <LabelNonAlcoholic isAlcoholic={formik.values.alcoholic}>
            <RadioInput
              theme={theme}
              type="radio"
              value="Non alcoholic"
              name="alcoholic"
              checked={
                true
                // isUserAdult(user.birthday) === false ||
                // form.alcoholic === 'Non alcoholic'
                //   ? true
                //   : false
              }
              onChange={formik.handleChange}
            />
            Non-alcoholic
          </LabelNonAlcoholic>
        </DivAlcoholic>
      </div>
    </Wrapper>
  );
};
