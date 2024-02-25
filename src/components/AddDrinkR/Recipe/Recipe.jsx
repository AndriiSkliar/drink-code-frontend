const Recipe = ({ formik }) => {
  return (
    <>
      <h2>Recipe Preparation</h2>
      <textarea
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
