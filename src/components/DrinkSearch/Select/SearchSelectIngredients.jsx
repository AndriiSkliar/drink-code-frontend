import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SearchSelectStyled } from './SearchSelect.styled.js';
import { fetchIngredients } from '../../../redux/drinks/drinks.operations.js';
import {
  selectIngredients,
  selectIsLoading,
  selectError,
} from '../../../redux/selectors/drinks.selectors.js';
import { Loader } from '../../Loader/Loader.jsx';

const SearchSelectIngredients = ({ setIngredient }) => {
  const dispatch = useDispatch();
  const ingredients = useSelector(selectIngredients);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchIngredients());
  }, [dispatch]);

  const searchByIngredient = (event) => {
    event.preventDefault();
    const ingredientParam = event.target.value;

    if (ingredientParam !== 'hide') setIngredient(ingredientParam);
    if (ingredientParam === 'hide') setIngredient('');
  };
  return (
    <SearchSelectStyled>
      {isLoading && <Loader />}
      {error && <p>Error: {error}</p>}
      <select
        id="ingredients"
        name="ingredients"
        defaultValue="hide"
        className="select select-styled"
        onChange={searchByIngredient}
      >
        <option value="hide">Ingredients</option>
        {ingredients.map((ingredient) => (
          <option key={ingredient.id} value={ingredient.title}>
            {ingredient.title}
          </option>
        ))}
      </select>
    </SearchSelectStyled>
  );
};
export default SearchSelectIngredients;
