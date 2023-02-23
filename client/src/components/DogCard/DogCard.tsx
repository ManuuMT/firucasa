import { Dog } from "../../models";

interface DogCardProps {
  data: Dog;
}

const DogCard: React.FC<DogCardProps> = (props) => {
  return (
    <div className="w-48 shadow-xl bg-white rounded-3xl justify-self-center overflow-hidden hover:cursor-pointer hover:scale-110 transition-all duration-300">
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
            {`${props.data.ageYears}${
              props.data.ageYears === "1" ? " año" : " años"
            } `}
          </p>
        </div>
      </div>
    </div>
  );
};

export default DogCard;
