import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Title from '../../components/Title/Title';
import { Loader } from '../../components/Loader/Loader.jsx';
import DrinkList from '../../components/DrinkList/DrinkList.jsx';
import { NotFoundCocktail } from '../../components/NotFoundDrink/NotFound';
import OwnDrinkCard from '../../components/DrinkCard/OwnDrinkCard.jsx';
import PaginationPanel from '../../components/Pagination/Pagination.jsx';
import { StyledDivNotFound } from './MyDrinks.styled.js';
import { deleteOwnCocktail, fetchOwnCoctails } from '../../redux/drinks/drinks.operations.js';
import {selectIsLoading, selectOwnCocktails, selectTotalOwnCocktails} from '../../redux/selectors/drinks.selectors.js'

const MyDrinksPage = () => {
  const dispatch = useDispatch();
  const ownCocktails = useSelector(selectOwnCocktails);
  const isLoading = useSelector(selectIsLoading);
  const totalOwn = useSelector(selectTotalOwnCocktails);

  const [searchParams, setSearchParams] = useSearchParams();
  const page = searchParams.get('page') || 1;
  const [perPage, setPerPage] = useState(8);

  useEffect(() => {
    dispatch(fetchOwnCoctails());
  }, [dispatch, page]);

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      const newPerPage = screenWidth >= 1200 ? 9 : 8;
      if (newPerPage !== perPage) {
        setPerPage(newPerPage);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [perPage, page]);

  const totalPages = Math.ceil(totalOwn / perPage);
  const startIndex = (page - 1) * perPage;
  const endIndex = Math.min(startIndex + perPage, totalOwn);

  return (
    <main className="container">
      {isLoading === true && <Loader />}
      <Title text={'My drinks'} />
      {ownCocktails.length === 0 ? (
        <StyledDivNotFound>
          <NotFoundCocktail />
          <p>You haven't added any favorite cocktails yet</p>
        </StyledDivNotFound>
      ) : (
        <>
          {totalOwn !== null && (
            <DrinkList>
              {ownCocktails.slice(startIndex, endIndex).map((cocktail) => (
                <OwnDrinkCard
                  name={cocktail.drink}
                  imgUrl={cocktail.drinkThumb}
                  description={cocktail.description}
                  alcoholic={cocktail.alcoholic}
                  id={cocktail._id}
                  key={cocktail._id}
                  handleDelete={deleteOwnCocktail}
                />
              ))}
            </DrinkList>
          )}
          {totalPages > 1 && <PaginationPanel pageQuan={totalPages} />}
        </>
      )}
    </main>
  );
};

export default MyDrinksPage;
