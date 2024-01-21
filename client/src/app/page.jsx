import Link from "next/link";
import BoyWithDog from "../assets/img/BoyWithDog.png";
import IconDog from "../assets/img/IconDog.png";

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="h-full flex justify-center items-center">
        <div className="flex justify-center w-[50%]">
          <div className="flex flex-col w-[60%] gap-4 font-semibold">
            <h1 className="text-5xl">
              ¡Encuentra a tu compañero de aventuras!
            </h1>
            <p className="text-xl">
              Dale una oportunidad a un perro sin hogar...
            </p>
            <Link href="/adopciones">
              <button className="flex items-center gap-2 bg-primary text-white hover:bg-purple-800 transition-all duration-300 w-fit px-5 py-2 rounded-lg">
                ¡Ver adopciones! <img src={IconDog.src} className="w-7 h-5" />
              </button>
            </Link>
          </div>
        </div>
        <div className="flex flex-col w-[50%]">
          <div className="w-[400px] h-[600px]">
            <img
              className="w-full h-full object-contain"
              src={BoyWithDog.src}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
