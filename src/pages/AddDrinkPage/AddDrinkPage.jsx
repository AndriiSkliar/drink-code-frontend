import { FlexBox, AddTitle, LinkWrapper } from './AddDrinkPage.styled';
import AddDrinkForm from '../../components/AddDrink/AddDrinkForm';
import FollowUs from '../../components/AddDrink/FollowUs/FollowUs';
import { PopularDrinks } from '../../components/AddDrink/PopularDrinks/PopularDrinks';

const AddDrinkPage = () => {
  return (
    <>
      <AddTitle>Add drink</AddTitle>
      <FlexBox>
        <AddDrinkForm />
        <LinkWrapper>
          <FollowUs />
          <PopularDrinks />
        </LinkWrapper>
      </FlexBox>
    </>
  );
};

export default AddDrinkPage;
