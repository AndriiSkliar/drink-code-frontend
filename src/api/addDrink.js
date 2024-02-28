import axios from 'axios';

export const addDrinktoDB = async (data) => {
  const stringValue = localStorage.getItem('persist:auth');
  const objectValue = JSON.parse(stringValue);
  const token = objectValue.token;
  const parseToken = JSON.parse(token);
  const config = {
    headers: {
      Authorization: `Bearer ${parseToken}`,
      'Content-Type': 'multipart/form-data',
    },
  };
  try {
    const resp = await axios.post(
      `https://drink-code-backend.onrender.com/api/drinks/own/add`,
      data,
      config
    );
    return resp.data;
  } catch (error) {
    console.error('Помилка при отриманні даних:', error);
    throw error;
  }
};
