import { useDispatch } from 'react-redux';
import { fetchDrinksByCategory } from '../../../redux/drinks/drinks.reducer.js';
import { SearchSelectStyled } from './SearchSelect.styled.js';
import { useSearchParams } from 'react-router-dom';
// import { selectCategory } from '../../../redux/selectors.js';

const SearchSelectCategory = ({ drinks }) => {
  // const category = useSelector(selectCategory);
  console.log('In category', drinks.length);
  function unique(arr) {
    let result = [];

    for (let str of arr) {
      if (!result.includes(str)) {
        result.push(str);
      }
    }

    return result;
  }
  const categories = unique(drinks.map((drink) => drink.category));
  // categories.unshift('All categories');

  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const queryValue = searchParams.get('category');
  console.log(queryValue);
  const searchByCategory = (event) => {
    const category = event.target.value;
    setSearchParams({ category: category });
    dispatch(fetchDrinksByCategory(category));
  };
  return (
    <SearchSelectStyled>
      <select
        id="categories"
        name="category"
        value={categories}
        className="select select-styled"
        onChange={searchByCategory}
      >
        <option value="hide">All categories</option>
        {categories.map((category) => (
          <option value={category} key={category}>
            {' '}
            {category}{' '}
          </option>
        ))}

        {/* <option value="ordinary drink">Ordinary Drink</option>
        <option value="cocktail">Cocktail</option>
        <option value="shake">Shake</option>
        <option value="other">Other/Unknown</option>
        <option value="cocoa">Cocoa</option>
        <option value="shot">Shot</option>
        <option value="coffee tea">Coffee / Tea</option>
        <option value="homemade liqueur">Homemade Liqueur</option>
        <option value="punch">Punch / Party Drink</option>
        <option value="beer">Beer</option>
        <option value="soft drink">Soft Drink</option> */}
      </select>
    </SearchSelectStyled>
  );
};
export default SearchSelectCategory;
