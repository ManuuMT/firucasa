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
    <div className="w-full flex justify-center bg-slate-300 mt-20 py-5 rounded-3xl shadow-md">
      <div className="w-3/4 flex flex-col">
        <div className="flex items-center mb-4">
          <MdLocationPin className="w-8 h-8 text-neutral-800" />
          <h3 className="text-neutral-800 font-bold">
            Mar del Plata, Argentina
          </h3>
        </div>
        <div className="grid grid-cols-4">
          {dogs && dogs.map((dog) => <DogCard data={dog} key={dog.id} />)}
        </div>
      </div>
    </div>
  );
};

export default Adoptions;
