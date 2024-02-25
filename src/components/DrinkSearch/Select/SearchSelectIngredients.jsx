import { useDispatch, useSelector } from 'react-redux';
import { fetchDrinksByIngredient } from '../../../redux/drinks/drinks.reducer.js';
import { SearchSelectStyled } from './SearchSelect.styled.js';
import { selectIngredient } from '../../../redux/selectors.js';

const SearchSelectIngredients = () => {
  const ingredient = useSelector(selectIngredient);

  const dispatch = useDispatch();

  const searchByIngredient = (event) => {
    const ingredient = event.target.value;
    console.log('ingredient', ingredient);
    const formData = {
      searchIngredient: ingredient,
    };

    dispatch(fetchDrinksByIngredient(JSON.stringify(formData)));
  };
  return (
    <SearchSelectStyled>
      <select
        id="ingredients"
        name="ingredients"
        value={ingredient}
        className="select select-styled"
        onChange={searchByIngredient}
      >
        <option value="hide">Ingredients</option>
        <option value="Light rum">Light rum</option>
        <option value="Applejack">Applejack</option>
        <option value="gin">Gin</option>
        <option value="Dark rum">Dark rum</option>
        <option value="Sweet Vermouth">Sweet Vermouth</option>
        <option value="Strawberry">Strawberry Schnapps</option>
        <option value="Scotch">Scotch</option>
        <option value="Apricot brandy">Apricot brandy</option>
        <option value="gin">Gin</option>
        <option value="hide">Ingredients</option>
        <option value="Light rum">Light rum</option>
        <option value="Applejack">Applejack</option>
        <option value="gin">Gin</option>
        <option value="Dark rum">Dark rum</option>
        <option value="Sweet Vermouth">Sweet Vermouth</option>
        <option value="Strawberry">Strawberry Schnapps</option>
        <option value="Scotch">Scotch</option>
        <option value="Apricot brandy">Apricot brandy</option>
        <option value="gin">Gin</option>
      </select>
    </SearchSelectStyled>
  );
};
export default SearchSelectIngredients;
