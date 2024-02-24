import axios from 'axios';
const BASE_URL = 'https://drink-code-backend.onrender.com';
// const BASE_URL = 'http://localhost:3000/api/drinks';

export const getDrinksPageDrinks = async () => {
  try {
    // !Чтобы проверить что работает - вставь сюда токен
    const token =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ZDhiNjk5MjM4ODViMWJmNjk4NTUyYiIsImlhdCI6MTcwODcwMTM3MywiZXhwIjoxNzA4Nzg0MTczfQ.p3KTjE54SBfCkC6ZYy8xF7G7Tny6eTreZOnAEQTBBlk';

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
