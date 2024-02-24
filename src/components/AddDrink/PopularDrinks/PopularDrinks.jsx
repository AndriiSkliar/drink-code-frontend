// @ts-nocheck
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPopularDrinks } from '../../../redux/drinks/drinksOperations';
import { selectPopularDrinks } from '../../../redux/selectors';

export const PopularDrinks = () => {
  const popDrinks = useSelector(selectPopularDrinks);
  const dispatch = useDispatch();

  console.log(popDrinks);

  useEffect(() => {
    dispatch(fetchPopularDrinks());
  }, [dispatch]);

  return (
    <div>
      <h3>Popular drinks</h3>
    </div>
  );
};
