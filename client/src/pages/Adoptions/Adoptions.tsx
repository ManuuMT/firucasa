import { MdLocationPin } from "react-icons/md";

const Adoptions: React.FC = () => {
  return (
    <div className="w-full flex justify-center bg-slate-300 mt-20 py-5 rounded-3xl shadow-md">
      <div className="w-3/4 flex flex-col">
        <div className="flex items-center">
          <MdLocationPin className="w-8 h-8 text-black" />
          <h3 className="text-black font-bold">Mar del Plata, Argentina</h3>
        </div>
        <div className="grid grid-cols-4 gap-4">
          <div className="bg-black w-20 h-20 justify-self-center" />
          <div className="bg-black w-20 h-20 justify-self-center" />
          <div className="bg-black w-20 h-20 justify-self-center" />
          <div className="bg-black w-20 h-20 justify-self-center" />
          <div className="bg-black w-20 h-20 justify-self-center" />
          <div className="bg-black w-20 h-20 justify-self-center" />
          <div className="bg-black w-20 h-20 justify-self-center" />
          <div className="bg-black w-20 h-20 justify-self-center" />
        </div>
      </div>
    </div>
  );
};

export default Adoptions;
