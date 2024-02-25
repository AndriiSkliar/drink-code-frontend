// @ts-nocheck
import { PopularDrinks } from '../../components/AddDrink/PopularDrinks/PopularDrinks';
import AddDrinkForm from '../../components/AddDrinkR/AddDrinkForm';

const AddDrinkPage = () => {
  return (
    <div className="container">
      <AddDrinkForm />
      <PopularDrinks />
    </div>
  );
};

export default AddDrinkPage;
