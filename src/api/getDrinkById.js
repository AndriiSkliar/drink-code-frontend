import { instance } from '../redux/auth/authOperations';

export const getDrinkByID = async (drinkId) => {
  try {
    const resp = await instance.get(`/drinks/${drinkId}`);
    const data = resp.data;

    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
