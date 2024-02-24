/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import DrinksItem from './DrinksItem/DrinksItem';
import { StyledDrinksList } from './StyledDrinksList';

const DrinksList = ({ title, drinks }) => {
  // Фильтруем коктейли по указанной категории
  const filteredDrinks = drinks.filter((drink) => drink.category === title);

  // Хук состояния для отслеживания видимого количества коктейлей в зависимости от ширины экрана
  const [visibleDrinks, setVisibleDrinks] = useState(1);

  // useEffect для обработки изменения размера экрана и обновления видимого количества коктейлей
  useEffect(() => {
    // Функция обработки изменения размера экрана
    const handleResize = () => {
      const screenWidth = window.innerWidth;

      // Установка видимого количества коктейлей в зависимости от ширины экрана
      if (screenWidth >= 1280) {
        setVisibleDrinks(3);
      } else if (screenWidth >= 768) {
        setVisibleDrinks(2);
      } else {
        setVisibleDrinks(1);
      }
    };

    // Добавляем слушателя события изменения размера экрана и вызываем функцию handleResize при монтировании компонента
    window.addEventListener('resize', handleResize);
    handleResize();
    console.log('drinks', drinks);
    // Очищаем слушателя события при размонтировании компонента, чтобы избежать утечек памяти
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Пустой массив зависимостей гарантирует вызов useEffect только при монтировании и размонтировании

  // Получаем ограниченное количество коктейлей в соответствии с видимым количеством
  const limitedDrinks = filteredDrinks.slice(0, visibleDrinks);

  return (
    <StyledDrinksList>
      {/* Заголовок категории */}
      <h2 className="drinksListTitle">{title}</h2>

      {/* Список коктейлей */}
      <ul className="drinksList">
        {limitedDrinks.map((drink) => (
          <DrinksItem
            key={drink._id}
            className="drinksListItem"
            drinkName={drink.drink}
            img={drink.drinkThumb}
          />
        ))}
      </ul>
    </StyledDrinksList>
  );
};

export default DrinksList;
