// @ts-nocheck
import { useSelector } from 'react-redux';
import { SearchSelectStyled } from './SearchSelect.styled.js';
import { selectCategory } from '../../../redux/selectors.js';

const SearchSelectCategory = ({setCategory}) => {
  const category = useSelector(selectCategory);


  const searchByCategory = (event) => {
    const categoryParam = event.target.value;
    if(categoryParam !== "hide") {
       setCategory(categoryParam);
    }
  };
  
  return (
    <SearchSelectStyled>
      <select
        id="categories"
        name="category"
        value={category}
        className="select select-styled"
        onChange={searchByCategory}
      >
        <option value="hide">All categories</option>
        <option value="ordinary drink">Ordinary Drink</option>
        <option value="cocktail">Cocktail</option>
        <option value="shake">Shake</option>
        <option value="other">Other/Unknown</option>
        <option value="cocoa">Cocoa</option>
        <option value="shot">Shot</option>
        <option value="coffee tea">Coffee / Tea</option>
        <option value="homemade liqueur">Homemade Liqueur</option>
        <option value="punch">Punch / Party Drink</option>
        <option value="beer">Beer</option>
        <option value="soft drink">Soft Drink</option>
      </select>
    </SearchSelectStyled>
  );
};
export default SearchSelectCategory;
