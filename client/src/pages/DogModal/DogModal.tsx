import { Dog } from "../../models";
import IconDog from "../../assets/img/IconDog.png";

interface DogModalProps {
  data: Dog;
  isOpen: (open: boolean) => void;
  age: string;
}

const DogModal: React.FC<DogModalProps> = (props) => {
  // * Methods

  return (
    <div className="w-full absolute -top-24 left-0 right-0 mx-auto z-10 bg-white flex gap-10 p-10 rounded-3xl animate-modal">
      <div className="w-1/2">
        <img
          src={props.data.imageUrl}
          className="rounded-3xl w-full"
          alt={props.data.name}
        />
      </div>
      <div className="w-1/2 relative">
        <div
          onClick={() => props.isOpen(false)}
          className="text-white cursor-pointer absolute -top-6 right-0 bg-purple-600 px-2 rounded-3xl"
        >
          X
        </div>
        <div className="mb-4">
          <div className="text-black font-bold">
            {props.data?.name.toUpperCase()}
          </div>
          {props.data.specie && (
            <div className="text-neutral-500">{props.data?.specie}</div>
          )}
        </div>
        <div className="flex flex-wrap gap-2 mb-4">
          <div className="w-fit rounded-xl px-2 text-purple-900 bg-purple-400 ">
            {props.data?.gender}
          </div>
          {props.data.size && (
            <div className="w-fit rounded-xl px-2 text-orange-900 bg-orange-400">
              {props.data?.size}
            </div>
          )}
          <div className="w-fit rounded-xl px-2 text-green-900 bg-green-400">
            {props.age}
          </div>
        </div>
        <div className="text-black mb-4">{props.data?.description}</div>
        <div className="btn-main">
          ¡Adoptame!
          <img src={IconDog} className="w-8" alt="Firucasa" />
        </div>
      </div>
    </div>
  );
};

export default DogModal;
