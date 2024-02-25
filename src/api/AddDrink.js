import axios from 'axios';

export const AddDrinktoDB = async (data) => {
  const stringValue = localStorage.getItem('persist:auth');
  const objectValue = JSON.parse(stringValue);
  const token = objectValue.token;
  const parseToken = JSON.parse(token);
  console.log('TOKEN', parseToken);
  console.log('Data', data);
  const config = {
    headers: {
      Authorization: `Bearer ${parseToken}`,
      'Content-Type': 'multipart/form-data',
    },
  };
  try {
    const resp = await axios.post(
      `https://drink-code-backend.onrender.com/api/drinks/own/add`,
      //   `http://localhost:3000/api/drinks/own/add`,
      data,
      config
    );
    return resp.data.message;
  } catch (error) {
    console.error('Помилка при отриманні даних:', error);
    throw error;
  }
};
