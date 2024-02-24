import { Title, Wrapper } from './Recipe.styled';
import { useFormik, Field } from 'formik';

import { useSelector } from 'react-redux';

const formik = useFormik({
  initialValues: {

    instructions: '',
  },
  onSubmit: values => {
    // handle form submission
    console.log(values);
  },
});

export const Recipe = ({ formik, errors, handleChange }) => {
  // const persistedForm = useSelector(selectForm);
  // const form = persistedForm.form; // change here
  
  return (
    <Wrapper>
      <Title>
     
        <h4> Recipe Preparation </h4>
      </Title>

      <Field
        errors={errors.instructions}
        name="instructions"
        onChange={(e) => {
          formik.handleChange(e);
        }}
        placeholder="Enter the recipe"
        rows={6}
        value={formik.values.instructions}
        // onChange={formik.handleChange}
      />
    </Wrapper>
  );
};
// export default Recipe;
