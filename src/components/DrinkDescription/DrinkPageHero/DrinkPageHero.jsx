import React, { useEffect, useRef, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { fetchDrinkById } from 'Api/GetMovies';
import { StyledLink, StyledMovieDetails } from './MovieDetails.styled';

const defaultImg = 'посилання на заглушку';

const DrinkDetails = () => {
  const { drinkId } = useParams();

  const [drinkDetails, setDrinkDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const [error, setError] = useState(null);

  const location = useLocation();
  console.log('location: ', location);
  const backLinkRef = useRef(location.state?.from ?? '/');

  useEffect(() => {
    const fetchDrinkDetails = async () => {
      try {
        setIsLoading(true);
        const { data } = await fetchDrinkById(drinkId);

        setDrinkDetails(data);
      } catch (error) {
        setDrinkDetails(null);
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchDrinkDetails();
  }, [drinkId]);
  return (
    <div>
      <StyledLink to={backLinkRef.current}>Go back</StyledLink>
      {error !== null && <p>{error}</p>}
      {isLoading && <Loader />}
      {drinkDetails !== null && (
        <div>
          <StyledMovieDetails>
            <div>
              <h1 className="drink-title">{drinkDetails.drink}</h1>
              <p className="desc-glass">{drinkDetails.glass}</p>
              <p className="desc-alco">{drinkDetails.alcoholic}</p>
              <p className="desc">{drinkDetails.description}</p>
            </div>

            <img
              src={
                drinkDetails.drinkThumb
                  ? `https://drink-code-backend.onrender.com${drinkDetails.drinkThumb}`
                  : defaultImg
              }
              alt={drinkDetails.drink}
              width="335"
              height="400"
            />
          </StyledMovieDetails>
        </div>
      )}
    </div>
  );
};

export default DrinkDetails;
