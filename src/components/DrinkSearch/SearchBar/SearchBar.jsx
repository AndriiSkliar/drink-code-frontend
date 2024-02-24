import { SearchBarStyled, Icon } from './SearchBar.styled.js';

const SearchBar = ({ onSubmit }) => {
  return (
    <SearchBarStyled>
      <div>
        <form className="SearchForm" onSubmit={onSubmit}>
          <input
            className="SearchForm-input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Enter the text"
            // onChange={this.handleInputChange}
          />
          <button type="submit" className="SearchForm-button">
            <Icon />
          </button>
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
