import axios from 'axios';
const BASE_URL = 'https://drink-code-backend.onrender.com';
// const BASE_URL = 'http://localhost:3000';

export const getDrinkByID = async (drinkId) => {
  try {
    const token =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ZGIxZWJlOTVlMWJiNzg5YzM1ZGQyNyIsImlhdCI6MTcwODg2NjA0OSwiZXhwIjoxNzA4OTQ4ODQ5fQ.osp_1ZqYZdy5i0U9T89EM5FyIwkFMkjxuuIF-rxf3Fs';
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const resp = await axios.get(`${BASE_URL}/api/drinks/${drinkId}`, config);
    const data = resp.data;
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
