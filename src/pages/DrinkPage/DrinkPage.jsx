import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { StyledDrinkPage } from './DrinkPage.styled';
import { getDrinkByID } from '../../api/getDrinkById';
import drinks from '../../assets/images/drink-page/drinks-mobile.jpg';
import Title from '../../components/Title/Title';

const defaultImg = 'https://dummyimage.com/335x400';

const DrinkPage = () => {
  const { drinkId } = useParams();

  const [drinkDetails, setDrinkDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getDrinkDetails = async () => {
      try {
        setIsLoading(true);
        const data = await getDrinkByID(drinkId);

        setDrinkDetails(data);
        console.log('data: ', data);
      } catch (error) {
        setDrinkDetails(null);
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    getDrinkDetails();
  }, [drinkId]);
  return (
    <StyledDrinkPage className="container">
      {error !== null && <p>{error}</p>}
      {isLoading && <p>Loading...</p>}
      {drinkDetails !== null && (
        <div>
          <Title text={drinkDetails.drink} />
          <div className="desc-glass-alco">
            <span>{drinkDetails.glass}</span>
            <span> / </span>
            <span>{drinkDetails.alcoholic}</span>
          </div>
          <p className="desc-drink">{drinkDetails.description}</p>

          <button className="btn-add-rem-fav">Add to favorite drinks</button>

          <img
            className="img-drink"
            src={
              drinkDetails.drinkThumb
                ? `${drinkDetails.drinkThumb}`
                : defaultImg
            }
            alt={drinkDetails.drink}
            width="335"
            height="400"
          />

          <h2 className="title-sect-ingred">Інгредієнти</h2>

          <ul className="ingred-list">
            {drinkDetails.ingredients.map(
              ({ ingredientId, title, measure }) => (
                <li className="ingred-item" key={title}>
                  <img
                    src={ingredientId.ingredientThumb || defaultImg}
                    alt={title}
                    width="157"
                    height="157"
                  />
                  <div className="ingred-descr"></div>
                  <span className="ingred-name">{title}</span>
                  <span className="ingred-quantity">{measure}</span>
                </li>
              )
            )}
          </ul>

          <h2 className="descr-drink-title">Recipe Preparation</h2>
          <p className="recipe-text">{drinkDetails.instructions}</p>
          <img
            className="img-three-drinks"
            src={drinks}
            alt="three drinks"
            width="335"
            height="430"
          />
        </div>
      )}
    </StyledDrinkPage>
  );
};

export default DrinkPage;
