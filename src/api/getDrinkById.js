import axios from 'axios';

const BASE_URL = 'https://drink-code-backend.onrender.com';

export const getDrinkByID = async (drinkId) => {
  try {
    const token =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ZGIzY2ZmODgyMmYyYjAxNmExOTYwOSIsImlhdCI6MTcwODg2NzIwMCwiZXhwIjoxNzA4OTUwMDAwfQ.8k32-dm-kV8qwa9g7uaIda9eVK8c8FICKre8GGZ2ZC0';
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const resp = await axios.get(`${BASE_URL}/api/drinks/${drinkId}`, config);
    const data = resp.data;
    console.log('data: ', data);
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
