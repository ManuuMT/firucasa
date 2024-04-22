import axios from "axios";

export default async function getDogs(page, filters = {}) {
  const baseUrl = process.env.NEXT_PUBLIC_SERVER;

  try {
    const res = await axios.post(`${baseUrl}/get-dogs?page=${page}`, {
      ...filters,
    });

    return res.data;
  } catch (error) {
    console.error("Failed to fetch data");
  }
}
