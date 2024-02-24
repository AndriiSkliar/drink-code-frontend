// import React, { useState, useEffect } from 'react';
// import DrinksList from '../../components/DrinksList/DrinksList';
import SearchBar from '../../components/SearchBar/SearchBar';
import SearchSelectCategory from '../../components/SearchSelectCategory/SearchSelectCategory';
import { StyledDrinksPage } from './DrinkPage.styled.js';
// import { getDrinksPageDrinks } from '../../api/getDrinksPageDrinks';
// // import { SearchByLetter } from '../../api/getSearchDrinksByLetter';
// // import { SearchsByCategory} from '../../api/getSearchDrinksByCategory';
// // import { SearchByIngredients } from '../../api/getSearchDrinksByIngredients';
// // import { NavLink } from 'react-router-dom';

// const DrinksPage = () => {
//   const [drinks, setDrinks] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const data = await getDrinksPageDrinks();
//         setDrinks(data);
//       } catch (error) {
//         console.error('Ошибка при загрузке данных:', error);
//       }
//     };

//     fetchData();
//   }, []);
//   return (
//     <StyledDrinksPage className="container">

//       <div className="serchingContainer">
// <SearchBar/>
//         <SearchSelectCategory/>
//         <SearchSelectCategory/>
//       </div>
//       <div className="categoryListsContainer">
//         <DrinksList
//           drinks={drinks}
//           title={'Drinks'}
//           key={'Drinks'}
//         />
//       </div>
//     </StyledDrinksPage>
//   );
// };

const DrinksPage = () => {
  return (
    <StyledDrinksPage className="container">
      <h1>Drinks</h1>
      <div className="searchingContainer">
        <SearchBar />
        <SearchSelectCategory />
      </div>
      <div className="categoryListsContainer">{/* <DrinksList /> */}</div>
    </StyledDrinksPage>
  );
};
export default DrinksPage;
