import axios from "axios";
import { Dog } from "../models";

export const GetSingleDogRequest = async (id: string) => {
  const res = await axios.get(`http://localhost:3001/dogs/${id}`);
  const data: Dog = res.data.body;
  return data;
};
