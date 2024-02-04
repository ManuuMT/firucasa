"use client";

import { useQuery } from "@tanstack/react-query";
import DogCard from "./DogCard";
import axios from "axios";

const getDogs = async () => {
  const baseUrl = process.env.NEXT_PUBLIC_SERVER;
  const res = await axios.get(`${baseUrl}/dogs`);

  if (!res) {
    throw new Error("Failed to fetch data");
  }

  return res.data;
};

export default function DogList() {
  const {
    data: dogs,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["dogs"],
    queryFn: getDogs,
  });

  return (
    <>
      {isLoading && <p>Cargando...</p>}
      {!isLoading && isError && <p>Error al cargar los datos</p>}
      {!isLoading && !isError && (
        <div className="w-[70%] h-full rounded-xl">
          <div className="w-full flex justify-center">
            <h1 className="text-2xl font-semibold text-center my-5">
              Listado de perros
            </h1>
          </div>

          <div className="w-full flex flex-wrap justify-center gap-6">
            {dogs.map((dog) => (
              <DogCard dog={dog} key={dog.id} />
            ))}
          </div>
        </div>
      )}
    </>
  );
}
