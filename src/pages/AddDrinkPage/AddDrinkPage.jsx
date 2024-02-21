import { FlexBox, DivFollowUs, Undertitle } from './AddDrinkPage.styled';
import  AddDrink  from '../../components/AddDrink/AddDrinkForm';
import  Title from '../../components/Title/Title';
import  FollowUs  from '../../components/AddDrink/FollowUs/FollowUs';
import {PopularDrinks}  from '../../components/AddDrink/PopularDrinks/PopularDrinks';
import { useSelector } from 'react-redux';
import { themeSlice } from '../../redux/theme/themeSlice';

const AddDrinkPage = () => {
  const theme = useSelector(themeSlice);
  return (
    <>
      <Title
        theme={theme}
        title={'Add drink'}
        marginMobile={'40px'}
        marginTablet={'60px'}
        marginDesktop={'60px'}
      />
      <FlexBox>
        <AddDrinkForm theme={theme}>
          <div>
            <DivFollowUs>
              <Undertitle theme={theme}>Follow us</Undertitle>
              <FollowUs theme={theme}></FollowUs>
            </DivFollowUs>
            <PopularDrinks></PopularDrinks>
          </div>
        </AddDrinkForm>
      </FlexBox>
    </>
  );
};

export default AddDrinkPage;