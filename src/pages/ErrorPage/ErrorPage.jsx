import { NotFoundCocktail } from '../../components/NotFoundDrink/NotFound';
import {
  ErrorSection,
  ErrorImg,
  TitleContainer,
  TitleElement,
} from './ErrorPage.styled';

const ErrorPage = () => {
  return (
    <ErrorSection>
      <div className="container">
        <TitleContainer>
          <TitleElement>4</TitleElement>
          <NotFoundCocktail width={'123'} height={'156'} />
          <TitleElement>4</TitleElement>
        </TitleContainer>
      </div>
    </ErrorSection>
  );
};

export default ErrorPage;
