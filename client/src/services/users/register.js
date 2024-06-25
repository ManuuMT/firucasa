import axios from '../axios';

export default async function registerService(values) {
  try {
    const res = await axios.post('/register', values);
    return res;
  } catch (error) {
    return error?.response?.data?.message;
  }
}
