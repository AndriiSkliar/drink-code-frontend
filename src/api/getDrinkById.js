import axios from 'axios';
const BASE_URL = 'https://drink-code-backend.onrender.com';
// const BASE_URL = 'http://localhost:3000';

export const getDrinkByID = async (drinkId) => {
  try {
    const token =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ZDc1OGMyNTQzMWU0NDdiMzA5YmE4MyIsImlhdCI6MTcwODYxMTgxNywiZXhwIjoxNzA4Njk0NjE3fQ.iRmuhnFWJGfpB5DGKLbtl7yTA2TWOR-OXjwzZ2Ai1Co';
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
