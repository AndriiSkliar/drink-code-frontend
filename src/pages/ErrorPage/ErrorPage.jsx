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
          <ErrorImg />
          <TitleElement>4</TitleElement>
        </TitleContainer>
      </div>
    </ErrorSection>
  );
};

export default ErrorPage;
