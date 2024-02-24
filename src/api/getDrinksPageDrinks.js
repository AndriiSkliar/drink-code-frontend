import axios from 'axios';
const BASE_URL = 'https://drink-code-backend.onrender.com';
// const BASE_URL = 'http://localhost:3000/api/drinks';

export const getDrinksPageDrinks = async () => {
  try {
    // !Чтобы проверить что работает - вставь сюда токен
    const token =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ZDllYTgyZGQ1ZDAzMWYzZDNlNmI1OCIsImlhdCI6MTcwODc5OTYzMywiZXhwIjoxNzA4ODgyNDMzfQ.7bt8fPBDNbMl-G4XnO54dKU1gZdrZ9gGogW78WfLaXo';

    // ! Добавь токен в заголовок запроса
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const resp = await axios.get(
      `${BASE_URL}/api/drinks`,
      config
      // config
    );
    const data = resp.data;
    console.log('data', data);
    return data;
  } catch (error) {
    console.error('Ошибка при получении данных:', error);
    throw error;
  }
};
