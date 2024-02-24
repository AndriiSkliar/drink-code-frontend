import { SearchSelectStyled } from './SearchSelect.styled.js';

const SearchSelect = () => {
  return (
    <SearchSelectStyled>
      <div className="select-container">
        <select
          id="categories"
          name="categories"
          className="select select-styled"
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
        <select
          id="ingredients"
          name="ingredients"
          className="select select-styled"
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
      </div>
    </SearchSelectStyled>
  );
};
export default SearchSelect;
