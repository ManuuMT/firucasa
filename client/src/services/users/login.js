import axios from '../axios';

export default async function loginService(values) {
  try {
    const res = await axios.post('/login', values);
    return res;
  } catch (error) {
    return error?.response?.data?.message;
  }
}
