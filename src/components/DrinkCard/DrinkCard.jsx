import React from 'react';

const DrinkCard = () => {
  const dispatch = useDispatch();

  const handleDeleteCocktail = (cocktailId) => {
    dispatch(deleteCocktails(cocktailId));
  };

  return (
    <li>
      <a href="#">
        <img src="./src/assets/example.png" alt="Cocktail" />
        <h2>Cocktail name</h2>
        <p>Alcoholic</p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab voluptate
          eligendi, corrupti cumque incidunt error quod, officiis praesentium
          optio beatae est consequuntur rerum in culpa explicabo maxime!
          Placeat, sint a!
        </p>
      </a>
      <button>See more</button>
      <button onClick={handleDeleteCocktail}>Delete</button>
    </li>
  );
};

export default DrinkCard;
