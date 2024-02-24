import { SearchBarStyled } from './SearchBar.styled.js';

const SearchBar = ({ onSubmit }) => {
  return (
    <SearchBarStyled>
      <div>
        <form className="SearchForm" onSubmit={onSubmit}>
          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label"></span>&#128270;
          </button>

          <input
            className="SearchForm-input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            // onChange={this.handleInputChange}
          />
        </form>
      </div>
    </SearchBarStyled>
    //     <form onSubmit={onSubmit}>
    //         <label>
    //             <input type="text" name="searchKey" required placeholder="Enter the text" />
    //         </label>
    //         <button type="submit">Search</button>
    //   </form>
  );
};
export default SearchBar;
