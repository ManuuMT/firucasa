import axios from 'axios';

export default async function getShelters() {
  const baseUrl = process.env.NEXT_PUBLIC_SERVER;

  try {
    const res = await axios.get(`${baseUrl}/shelter`);
    return res;
  } catch (error) {
    console.error('Failed to fetch data');
  }
}
