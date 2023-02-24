import axios from "axios";
import { useLoaderData } from "react-router-dom";

const DogInfo: React.FC = () => {
  const dog: any = useLoaderData();

  return (
    <div className="mt-20">
      <div className="text-black">{dog.name}</div>
    </div>
  );
};

export default DogInfo;

export const LoaderDogInfo = async ({ params }: any) => {
  const dog = await axios.get(`http://localhost:3001/dogs/${params.id}`);
  const data = dog.data.body;
  return data;
};
