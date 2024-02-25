import axios from 'axios';

const BASE_URL = 'https://drink-code-backend.onrender.com';

const getTokenFromLocalStorage = () => {
  const persistAuthString = localStorage.getItem('persist:auth');
  const cleanedPersistAuthString = persistAuthString?.replace(/^"|"$|'/g, '');
  try {
    const persistAuthObject = JSON.parse(cleanedPersistAuthString);
    console.log('persistAuthObject:', persistAuthObject);

    const token = persistAuthObject?.token?.replace(/^"|"$|'/g, '') || null;
    console.log('token:', token);

    if (!token) {
      console.error('The token is not found in the local storage.');
      return null;
    }

    return token;
  } catch (error) {
    console.error('Error parsing JSON:', error.message);
    return null;
  }
};

export const getHomepageDrinks = async () => {
  try {
    const token = getTokenFromLocalStorage();
    if (!token) {
      // Дополнительная логика обработки отсутствия токена
      return null;
    }

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const resp = await axios.get(
      `${BASE_URL}/api/drinks/mainpage`,
      config
    );

    const data = resp.data;
    console.log('data', data);
    return data;
  } catch (error) {
    console.error('Ошибка при получении данных:', error);
    throw error;
  }
};