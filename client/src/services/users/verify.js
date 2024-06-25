import axios from '../axios';

export default async function verifyService(values) {
  try {
    const res = await axios.get('/verify');
    return res;
  } catch (error) {
    return error?.response?.data?.message;
  }
}
