import { useDispatch, useSelector } from 'react-redux';
import { fetchDrinksByIngredient } from '../../../redux/drinks/drinks.reducer.js';
import { SearchSelectStyled } from './SearchSelect.styled.js';
import { selectIngredient } from '../../../redux/selectors.js';
import { useSearchParams } from 'react-router-dom';
const SearchSelectIngredients = ({ drinks }) => {
  const ingredients = useSelector(selectIngredient);

  function unique(arr) {
    let result = [];

    for (let str of arr) {
      if (!result.includes(str)) {
        result.push(str);
      }
    }

    return result;
  }
  const allIngredients = drinks.flatMap((drink) => drink.ingredients);

  const selectIngredients = unique(
    allIngredients.map((ingredient) => ingredient.title)
  );
  // selectIngredients.unshift('Ingredients');
  // console.log('selectIngredient', selectIngredients);
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const queryValue = searchParams.get('ingredients');
  console.log(queryValue);
  const searchByIngredient = (event) => {
    const ingredient = event.target.value;
    setSearchParams({ ingredient: ingredient });
    dispatch(fetchDrinksByIngredient(ingredient));
  };
  return (
    <SearchSelectStyled>
      <select
        id="ingredients"
        name="ingredients"
        value={ingredients}
        className="select select-styled"
        onChange={searchByIngredient}
      >
        <option value="ingredients">Ingredients</option>
        {selectIngredients.map((title) => (
          <option value={title} key={title}>
            {' '}
            {title}{' '}
          </option>
        ))}
      </select>
    </SearchSelectStyled>
  );
};
export default SearchSelectIngredients;
