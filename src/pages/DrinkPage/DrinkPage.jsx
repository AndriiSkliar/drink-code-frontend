import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { StyledDrinkPage } from './DrinkPage.styled';
// import { getDrinkByID } from '../../api/getDrinkById';
import images from 'src/assets/images/drink-page/images';

import Title from '../../components/Title/Title';
import drinksSelectors from '../../redux/drinks/drinkSelectors';
import { useSelector, useDispatch } from 'react-redux';
import { fetchDrinkDetails } from '../../redux/drinks/drinksOperations.js';
import { selectIsLoading } from '../../redux/selectors';
import { Loader } from '../../components/Loader/Loader';
import ErrorPage from '../ErrorPage/ErrorPage.jsx';

const defaultImg = 'https://dummyimage.com/335x400';

const DrinkPage = () => {
  const dispatch = useDispatch();
  const drinkDetails = useSelector(drinksSelectors.drinkDetails);
  const error = useSelector(drinksSelectors.selectError);
  const isLoading = useSelector(selectIsLoading);

  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchDrinkDetails(id));
  }, [dispatch]);

  return (
    <>
      {error !== null ? (
        <ErrorPage />
      ) : (
        <StyledDrinkPage className="container">
          {isLoading === true && <Loader />}
          {drinkDetails !== null && (
            <div>
              <div className="drink-container">
                <div>
                  <Title text={drinkDetails.drink} />
                  <div className="desc-glass-alco">
                    <span>{drinkDetails.glass}</span>
                    <span> / </span>
                    <span>{drinkDetails.alcoholic}</span>
                  </div>
                  <p className="desc-drink">{drinkDetails.description}</p>

                  <button className="btn-add-rem-fav">
                    Add to favorite drinks
                  </button>
                </div>

                <img
                  className="img-drink"
                  src={
                    drinkDetails.drinkThumb
                      ? `${drinkDetails.drinkThumb}`
                      : defaultImg
                  }
                  alt={drinkDetails.drink}
                />
              </div>

              <h2 className="title-sect-ingred">Ingredients</h2>

              <ul className="ingred-list">
                {drinkDetails.ingredients.map(
                  ({ ingredientId, title, measure }) => (
                    <li className="ingred-item" key={title}>
                      <div className="img-container">
                        <img
                          className="img-ingred"
                          src={ingredientId.ingredientThumb || defaultImg}
                          alt={title}
                        />
                      </div>
                      <div className="ingred-descr">
                        <span className="ingred-name">{title}</span>
                        <span className="ingred-quantity">{measure}</span>
                      </div>
                    </li>
                  )
                )}
              </ul>

              <h2 className="descr-drink-title">Recipe Preparation</h2>
              <div className="recipe-container">
                <p className="recipe-text">{drinkDetails.instructions}</p>

                {/* <img
                  className="img-three-drinks"
                  srcSet={
                    ({ drinksMobile }, { drinksTablet }, { drinksDesktop })
                  }
                  src={drinks}
                  alt="three drinks"
                /> */}
                <picture>
                  <source
                    srcSet={images.drinks_mobile}
                    type="image/jpg"
                    media="(min-width:280px)"
                    width="335px"
                    height="430px"
                  />
                  <source
                    srcSet={images.drinks_tablet}
                    type="image/jpg"
                    media="(min-width:768px)"
                    width="704px"
                    height="430px"
                  />
                  <source
                    srcSet={images.drinks_desktop}
                    type="image/jpg"
                    media="(min-width:1200px)"
                    width="631px"
                    height="480px"
                  />
                  <img
                    src={images.drinks_mobile}
                    alt="three drinks"
                    className="img-three-drinks"
                    // width="335px"
                    // height="430px"
                  />
                </picture>
              </div>
            </div>
          )}
        </StyledDrinkPage>
      )}
    </>
  );
};

export default DrinkPage;
