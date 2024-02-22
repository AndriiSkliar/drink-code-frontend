

export const SearchBar = ({ onSubmit }) => {

    return (
        
        <form onSubmit={onSubmit}>
            <label>
                <input type="text" name="searchKey" required placeholder="Enter the text" />
            </label>
            <button type="submit">Search</button>
      </form> 
    );
 

}