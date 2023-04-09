import { Link } from "react-router-dom";
import BoyWithDog from "../../assets/img/BoyWithDog.png";
import IconDog from "../../assets/img/IconDog.png";

const Hero: React.FC = () => {
  return (
    <main className="flex w-full items-center mt-20">
      <div className="w-1/2 flex flex-col">
        <div className="">
          <h1 className="text-purple-700 text-6xl font-bold">
            ¡Encuentra a tu compañero de aventuras!
          </h1>
          <p className="mt-8 text-purple-700 text-2xl font-semibold">
            Dale una oportunidad a un perro sin hogar ♥
          </p>
          <Link to="/adoptions" className="btn-main mt-8 py-3 w-fit">
            ¡Adóptame!
            <img src={IconDog} className="w-8" alt="Firucasa" />
          </Link>
        </div>
      </div>
      <div className="w-1/2 flex justify-start">
        <img src={BoyWithDog} alt="BoyWithDog" />
      </div>
    </main>
  );
};

export default Hero;
