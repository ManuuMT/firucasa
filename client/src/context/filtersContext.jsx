"use client";

import { createContext, useEffect, useState } from "react";

const FiltersContext = createContext();

export const FiltersProvider = ({ children }) => {
  const initialFilters = {};

  //   const initialFilters = {
  //     gender: "MALE",
  //   };

  const [filters, setFilters] = useState(initialFilters);
  const [page, setPage] = useState(1);

  useEffect(() => {
    setPage(1);
    filters && console.log("filters --> ", filters);
  }, [filters]);

  useEffect(() => {
    page && console.log("page --> ", page);
  }, [page]);

  return (
    <FiltersContext.Provider value={{ filters, setFilters, page, setPage }}>
      {children}
    </FiltersContext.Provider>
  );
};

export default FiltersContext;
