import axios from 'axios'; //npm install axios

// const BASE_URL = "https://drink-code-backend.onrender.com";
const BASE_URL = "http://localhost:3000/api/drinks";

export const getAll = async () => {
  try {
    const resp = await axios.get(`${BASE_URL}/mainpage`);
    const data = resp.data;
    console.log('data',data);
    return data;
  } catch (error) {
    throw error;
  }
};
