import { useEffect, useState } from "react";
import { MdLocationPin } from "react-icons/md";
import axios from "axios";
import { Dog } from "../../models";
import { DogCard } from "../../components/";

const Adoptions: React.FC = () => {
  const [dogs, setDogs] = useState<Dog[]>();

  const getDogsRequest = async () => {
    const res = await axios.get("http://localhost:3001/dogs");
    const dogs: Dog[] = res.data.body;
    setDogs(dogs);
  };

  useEffect(() => {
    getDogsRequest();
  }, []);

  return (
    <div className="w-full flex bg-slate-300 mt-20 py-5 rounded-3xl shadow-md">
      <div className="w-full flex flex-col">
        <div className="flex items-center mb-4">
          <MdLocationPin className="w-8 h-8 text-neutral-800" />
          <h3 className="text-neutral-800 font-bold">
            Mar del Plata, Argentina
          </h3>
        </div>
        <div className="w-full flex">
          <div className="w-1/3" />
          <div className="w-2/3 flex">
            <div className="w-2/3 grid grid-cols-2 gap-4 relative">
              {dogs?.map((dog) => (
                <DogCard data={dog} key={dog.id} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Adoptions;
