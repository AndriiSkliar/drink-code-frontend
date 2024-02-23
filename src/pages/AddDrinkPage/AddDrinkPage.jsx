import { FlexBox, AddTitle, LinkWrapper } from './AddDrinkPage.styled';
import  AddDrink  from '../../components/AddDrink';
import  FollowUs  from '../../components/AddDrink/FollowUs/FollowUs';
import {PopularDrinks}  from '../../components/AddDrink/PopularDrinks/PopularDrinks';


const AddDrinkPage = () => {
  return (
    <>
    <AddTitle>Add drink</AddTitle>
    <FlexBox>
      <AddDrink />
      <LinkWrapper>
        <FollowUs />
        <PopularDrinks />
      </LinkWrapper>
    </FlexBox>
  </>
  );
};

export default AddDrinkPage;