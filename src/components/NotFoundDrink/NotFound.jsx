import cocktail2x from '../../assets/images/404Cocktail2x.png';
import cocktail from '../../assets/images/404Cocktail.png';

export const NotFoundCocktail = () => {
  return (
    <img
      srcSet={cocktail}
      src={cocktail2x}
      alt="cocktail"
      width="198"
      height="247"
    />
  );
};
