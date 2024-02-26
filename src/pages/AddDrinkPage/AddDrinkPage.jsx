// @ts-nocheck
import { PopularDrinks } from '../../components/AddDrink/PopularDrinks/PopularDrinks';
import AddDrinkForm from '../../components/AddDrinkR/AddDrinkForm';
import {
  FormContainer,
  PopularContainer,
  MainContainer,
} from './AddDrinkPage.styled';
const AddDrinkPage = () => {
  return (
    <MainContainer className="container">
      <FormContainer>
        <AddDrinkForm />
      </FormContainer>
      <PopularContainer>
        <PopularDrinks />
      </PopularContainer>
    </MainContainer>
  );
};

export default AddDrinkPage;
