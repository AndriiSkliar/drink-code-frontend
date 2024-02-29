import { SearchSelectStyled } from './SearchSelect.styled.js';

const SearchSelectIngredients = ({setIngredient}) => {

  const searchByIngredient = (event) => {
    event.preventDefault()
    const ingredientParam = event.target.value;
    
    if (ingredientParam !== "hide") setIngredient(ingredientParam);
    if (ingredientParam === "hide") setIngredient("")
   
  };
  return (
    <SearchSelectStyled>
      <select
        id="ingredients"
        name="ingredients"
        defaultValue="hide"
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
        <option value="Triple sec">Triple sec</option>
        <option value="Southern Comfort">Southern Comfort</option>
        <option value="Orange bitters">Orange bitters</option>
        <option value="Brandy">Brandy</option>
        <option value="Lemon vodka">Lemon vodka</option>
        <option value="Blended whiskey">Blended whiskey</option>
        <option value="Dry Vermouth">Dry Vermouth</option>
        <option value="Amaretto">Amaretto</option>
        <option value="Tea">Tea</option>
        <option value="Champagne">Champagne</option>
        <option value="Coffee liqueur">Coffee liqueur</option>
        <option value="Bourbon">Bourbon</option>
      </select>
    </SearchSelectStyled>
  );
};
export default SearchSelectIngredients;
