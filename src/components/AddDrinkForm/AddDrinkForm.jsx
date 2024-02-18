import { useDispatch, useSelector } from 'react-redux';
import { useState, useRef } from 'react';
import { AddDrinkFormContainer, AddDrinkFormBtn } from './AddDrinkForm.styled';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useDrink } from '../../redux/hooks/useDrink';


const AddDrinkForm = () => {
  const dispatch = useDispatch();
  const { isLoading } = useDrink();
  const navigate = useNavigate();
  const birthDate = useSelector((state) => state.auth.user.birthDate);
  const [drinkThumb, setDrinkThumb] = useState(null);

  const formAref = useRef();
  const formBref = useRef();
  const formCref = useRef();

  const currentDate = new Date();
  const userBirthDate = new Date(birthDate);
  const ageDiff = currentDate.getFullYear() - userBirthDate.getFullYear();

  const formData = {
    drink: '',
    description: '',
    alcoholic: ageDiff >= 18 ? 'Alcoholic' : 'Non alcoholic',
    category: '',
    glass: '',
    instructions: '',
    drinkThumb: '',
    ingredients: [
      { ingredientId: '', measure: 'cl', quantity: '1' },
      { ingredientId: '', measure: 'cl', quantity: '1' },
      { ingredientId: '', measure: 'cl', quantity: '1' },
    ],
  };

  const handleSubmit = () => {
    if (formAref.current && formBref.current && formCref.current) {
      formAref.current.handleSubmit();
      formBref.current.handleSubmit();
      formCref.current.handleSubmit();

      const { values: valuesFormA } = formAref.current;
      const { values: valuesFormB } = formBref.current;
      const { values: valuesFormC } = formCref.current;

      const { drink, description, alcoholic, category, glass } = valuesFormA;
      const { ingredients } = valuesFormB;
      const { instructions } = valuesFormC;

      const data = {
        drinkThumb,
        drink,
        description,
        alcoholic,
        category,
        glass,
        ingredients: JSON.stringify(
          ingredients.filter((ing) => ing.ingredientId),
        ),
        instructions,
      };

      dispatch(addMyDrink(data))
        .unwrap()
        .then(() => {
          navigate('/my');
          toast.success(`You have successfully added a drink ${drink}`);
        })
        .catch(() => {
          toast.error('You should fill all required fields');
        });
    }
  };

  return (
    <AddDrinkFormContainer>
      <DrinkDescriptionFields
        formData={formData}
        refId={formAref}
        setDrinkThumb={setDrinkThumb}
      />
      <DrinkIngredientsFields formData={formData} refId={formBref} />
      <RecipePreparationText formData={formData} refId={formCref} />

      <AddDrinkFormBtn type="submit" onClick={handleSubmit}>
        Add
      </AddDrinkFormBtn>
      {isLoading && <FullScreenLoader />}
    </AddDrinkFormContainer>
  );
};

export default AddDrinkForm;