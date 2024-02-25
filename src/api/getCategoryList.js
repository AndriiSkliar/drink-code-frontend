import axios from 'axios';
import { useSelector } from 'react-redux';

export const getCategoryList = async () => {
  const stringValue = localStorage.getItem('persist:auth');
  const objectValue = JSON.parse(stringValue);
  const token = objectValue.token;
  console.log('TOKEn', token);

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  try {
    const resp = await axios.get(
      `https://drink-code-backend.onrender.com/api/drinks/search/ingredients`,
      config
    );
    const data = resp.data;
    return data;
  } catch (error) {
    console.error('Ошибка при получении данных:', error);
    throw error;
  }
};
