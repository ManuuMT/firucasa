import { useState } from "react";
import { Dog } from "../../models";
import { DogInfo } from "../../pages";

interface DogCardProps {
  data: Dog;
}

const DogCard: React.FC<DogCardProps> = (props) => {
  // * States
  const [openModal, setOpenModal] = useState(false);

  // * Methods
  const AgeBuilder = () => {
    if (Number(props.data.ageYears) === 0) {
      return `${props.data?.ageMonths} meses`;
    }

    return Number(props.data.ageYears) === 1
      ? `${props.data?.ageYears} año`
      : `${props.data?.ageYears} años`;
  };

  return (
    <>
      {openModal && (
        <DogInfo isOpen={setOpenModal} data={props.data} age={AgeBuilder()} />
      )}
      <div
        className="w-48 shadow-xl bg-white rounded-3xl justify-self-center overflow-hidden hover:cursor-pointer hover:scale-110 transition-all duration-300"
        onClick={() => setOpenModal(true)}
      >
        <div>
          <img src={props.data.imageUrl} alt={props.data.name} />
        </div>
        <div className="flex flex-col items-center pt-2 pb-3">
          <h3 className="text-neutral-800 text-xl font-bold">
            {props.data.name}
          </h3>
          <div className="flex gap-2">
            <p className="text-purple-800 font-semibold bg-purple-400 rounded-xl px-2">
              {props.data.gender}
            </p>
            <p className="text-purple-800 font-semibold bg-purple-400 rounded-xl px-2">
              {AgeBuilder()}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default DogCard;
