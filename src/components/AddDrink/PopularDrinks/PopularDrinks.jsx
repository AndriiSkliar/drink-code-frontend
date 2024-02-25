// @ts-nocheck
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPopularDrinks } from '/src/redux/drinks/drinksOperations.js';
import { selectPopularDrinks } from '/src/redux/selectors.js';
import {
  DrinkDescription,
  NameDrink,
  PopDrinkImage,
  LinkDrink,
  Content,
  TitlePopularDrinks,
  AsideContainer,
} from './PopularDrinks.styled';

export const PopularDrinks = () => {
  const popDrinks = useSelector(selectPopularDrinks);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPopularDrinks());
  }, [dispatch]);

  return (
    <AsideContainer>
      <TitlePopularDrinks>Popular drinks</TitlePopularDrinks>
      <Content>
        {popDrinks.map((drinkPop) => {
          const { drink, description, drinkThumb, _id } = drinkPop;
          return (
            <LinkDrink key={_id}>
              <PopDrinkImage
                src={drinkThumb}
                alt={description}
                width={90}
                height={90}
              />
              <div>
                <NameDrink>{drink}</NameDrink>
                <DrinkDescription>{description}</DrinkDescription>
              </div>
            </LinkDrink>
          );
        })}
      </Content>
    </AsideContainer>
  );
};
