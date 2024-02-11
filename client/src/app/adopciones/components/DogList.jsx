"use client";

import { useInfiniteQuery } from "@tanstack/react-query";
import DogCard from "./DogCard";
import getDogs from "@/services/getDogs";
import React, { useEffect } from "react";
// import axios from "axios";

// const getDogs = async ({ pageParam = 1 }) => {
//   console.log("PAGE PARAM: ", pageParam);
//   const baseUrl = process.env.NEXT_PUBLIC_SERVER;
//   const res = await axios.get(`${baseUrl}/dogs?page=${pageParam}`);

//   if (!res) {
//     throw new Error("Failed to fetch data");
//   }

//   return res.data;
// };

export default function DogList() {
  const { data, isLoading, isError, fetchNextPage } = useInfiniteQuery({
    queryKey: ["dogs"],
    queryFn: async ({ pageParam }) => {
      console.log("PAGE PARAM: ", pageParam);
      const res = await getDogs(pageParam);
      console.log("Que es res data? --->", res.data);
      return res.data;
    },
    initialPageParam: 1,
    getNextPageParam: (lastPage) => lastPage.nextCursor ?? undefined,
  });

  useEffect(() => {
    data && console.log("----> ", data);
    // output: pageParams[0] , pages[]
  }, [data]);

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
            {data.pages.map((page) => (
              <React.Fragment key={page.currentCursor}>
                {page.results.map((dog) => (
                  <DogCard dog={dog} key={dog.id} />
                ))}
              </React.Fragment>
            ))}
          </div>
          <div className="w-full flex justify-center mt-5 gap-6">
            <button className="bg-slate-900 text-white px-4 py-2 rounded-md">
              {`<-- Anterior`}
            </button>
            <button
              onClick={() => fetchNextPage()}
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
