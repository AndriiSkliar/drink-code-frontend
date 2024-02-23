import axios from 'axios';
const BASE_URL = 'https://drink-code-backend.onrender.com';
// const BASE_URL = 'http://localhost:3000';

export const getDrinkByID = async (drinkId) => {
  try {
    const token =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ZDhiNjk5MjM4ODViMWJmNjk4NTUyYiIsImlhdCI6MTcwODcwMTM3MywiZXhwIjoxNzA4Nzg0MTczfQ.p3KTjE54SBfCkC6ZYy8xF7G7Tny6eTreZOnAEQTBBlk';
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
