import { Badge } from "@/components/ui/badge";
import { TiLocation } from "react-icons/ti";
import { LuSettings2 } from "react-icons/lu";
import axios from "axios";
import DogCard from "../../components/DogCard";

async function getData() {
  const baseUrl = process.env.NEXT_PRIVATE_SERVER;
  const res = await axios.get(`${baseUrl}/dogs`);

  if (!res) {
    throw new Error("Failed to fetch data");
  }

  return res.data;
}

export default async function Adoptions() {
  const data = await getData();

  return (
    <main className="min-h-screen p-10">
      <div className="w-full h-screen flex gap-10">
        {/* Filters column */}
        <aside className="w-[30%] bg-secondary h-full rounded-xl flex flex-col shadow-md">
          <div className="w-full flex justify-center">
            <h1 className="text-2xl font-semibold text-center my-5 flex items-center gap-2">
              <LuSettings2 />
              Filtros de búsqueda
            </h1>
          </div>
          <Badge
            variant="default"
            className="py-2 w-fit cursor-default text-base"
          >
            <TiLocation />
            Galicia
          </Badge>
        </aside>

        {/* Dogs - search result */}
        <div className="w-[70%] h-full rounded-xl">
          <div className="w-full flex justify-center">
            <h1 className="text-2xl font-semibold text-center my-5">
              Listado de perros
            </h1>
          </div>

          <div className="w-full flex flex-wrap justify-center gap-5">
            {data.map((dog) => (
              <DogCard dog={dog} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
