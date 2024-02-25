import cocktail2x from '../../assets/images/404Cocktail2x.png';
import cocktail from '../../assets/images/404Cocktail.png';

const NotFoundCocktail = ({ width, height }) => {
  return (
    <img
      srcSet={cocktail}
      src={cocktail2x}
      alt="cocktail"
      width={width}
      height={height}
    />
  );
};

export default NotFoundCocktail;
