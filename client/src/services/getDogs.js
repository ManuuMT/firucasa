import axios from "axios";

export default async function getDogs(pageParam = 1) {
  const baseUrl = process.env.NEXT_PUBLIC_SERVER;

  try {
    const res = await axios.get(`${baseUrl}/dogs?page=${pageParam}`);
    // console.log("res -----> ", res.data);
    return res;
  } catch (error) {
    console.error("Failed to fetch data");
  }
}
