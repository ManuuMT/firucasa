"use client";
import useDogs from "@/hooks/useDogs";
import DogCard from "./DogCard";
import FiltersContext from "@/context/filtersContext";
import { useContext } from "react";

export default function DogList() {
  const { data, isError, isPlaceholderData, isLoading } = useDogs();
  const { page, setPage } = useContext(FiltersContext);

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
            {data.results.map((dog) => (
              <DogCard dog={dog} key={dog.id} />
            ))}
          </div>
          <div className="w-full flex justify-center mt-5 gap-6">
            <button
              onClick={() => setPage((pre) => Math.max(pre - 1, 1))}
              disabled={page === 1}
              className="bg-slate-900 text-white px-4 py-2 rounded-md"
            >
              {`<-- Anterior`}
            </button>
            <button
              onClick={() => {
                setPage((pre) => (data?.hasNextPage ? pre + 1 : pre));
              }}
              disabled={isPlaceholderData || !data?.hasNextPage}
              className="bg-slate-900 text-white px-4 py-2 rounded-md"
            >
              {`Siguiente -->`}
            </button>
          </div>
        </div>
      )}
    </>
  );
}
