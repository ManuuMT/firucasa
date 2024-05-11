import axios from 'axios';

export default async function login(values) {
  const baseUrl = process.env.NEXT_PUBLIC_SERVER;
  try {
    const res = await axios.post(`${baseUrl}/login`, values);
    return res;
  } catch (error) {
    return error?.response?.data?.message;
  }
}
