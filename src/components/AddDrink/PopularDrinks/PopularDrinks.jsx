import { WrapperList } from './PopularDrinks.styled';

export const PopularDrinks = () => {
  return (
    <WrapperList>
      <li>
        <a href="">
          <img src="assets/images/addDrink/coctail.png" alt="img" />
          <div>
            <h4>Gin Lemon</h4>
            <p>
              A gin and tonic is a highball cocktail made with gin and tonic
              water poured over a large amount of ice. The ratio of gin to tonic
              varies according to taste, strength of the gin, other drink mixers
              being added, etc., with most recipes calling for a ratio between
              1:1 and 1:3.
            </p>
          </div>
        </a>
      </li>
      <li>
        <a href="">
          <img src="assets/images/addDrink/green.png" alt="img" />
          <div>
            <h4>Gin Smash</h4>
            <p>
              The Gin Basil Smash is a modern classic cocktail that’s
              refreshing, delicious, and so easy to make at home! This simple
              gin cocktail uses just four ingredients, and you can find them at
              the store any time of year.
            </p>
          </div>
        </a>
      </li>
      <li>
        <a href="">
          <img src="assets/images/addDrink/orange.png" alt="img" />
          <div>
            <h4>Spring Punch</h4>
            <p>
              The spring punch is a highball cocktail of vodka and liqueur, per
              IBA specified ingredients. The International Bartenders
              Association lists the beverage in its New Era Drinks category.
            </p>
          </div>
        </a>
      </li>
      <li>
        <a href="">
          <img src="assets/images/addDrink/mandarin.png" alt="img" />
          <div>
            <h4>Lone Tree Cooler</h4>
            <p>
              Stir powdered sugar and 2 oz. carbonated water in a collins glass.
              Fill glass with ice, add gin and vermouth, and stir. Fill with
              carbonated water and stir again. Add the twist of lemon peel and
              the orange spiral so that the end dangles over rim of glass.
            </p>
          </div>
        </a>
      </li>
    </WrapperList>
  );
};
