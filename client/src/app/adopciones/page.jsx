import { Badge } from "@/components/ui/badge";
import { TiLocation } from "react-icons/ti";
import { LuSettings2 } from "react-icons/lu";
import axios from "axios";
import { Combobox } from "@/components/ui/combobox";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import DogList from "./components/DogList";

export async function getData() {
  const baseUrl = process.env.NEXT_PRIVATE_SERVER;
  const res = await axios.get(`${baseUrl}/dogs`);

  if (!res) {
    throw new Error("Failed to fetch data");
  }

  return res.data;
}

const genres = [
  {
    value: "Macho",
    label: "Macho",
  },
  {
    value: "Hembra",
    label: "Hembra",
  },
];

export default async function Adoptions() {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["dogs"],
    queryFn: getData,
  });
  // const data = await getData();

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <main className="min-h-screen p-10">
        <div className="w-full h-screen flex gap-10">
          {/* Filters column */}
          <aside className="w-[30%] bg-slate-900 h-full rounded-xl flex flex-col shadow-md">
            <div className="w-full flex justify-center">
              <h1 className="text-2xl font-semibold text-center my-5 flex items-center gap-2">
                <LuSettings2 />
                Filtros de búsqueda
              </h1>
            </div>
            <div className="w-full flex flex-col gap-4 p-4">
              <Badge
                variant="default"
                className="py-2 w-fit cursor-default text-base"
              >
                <TiLocation />
                Galicia
              </Badge>
              <Combobox
                data={genres}
                selectText="Elige un género"
                noResultsText="No hay resultados encontrados"
              />
            </div>
          </aside>

          {/* Dogs - search result */}
          <DogList />
        </div>
      </main>
    </HydrationBoundary>
  );
}
