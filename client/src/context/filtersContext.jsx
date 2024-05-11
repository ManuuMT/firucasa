'use client';

import { createContext, useEffect, useState } from 'react';

const FiltersContext = createContext();

export const FiltersProvider = ({ children }) => {
  const initialFilters = {};
  const [filters, setFilters] = useState(initialFilters);
  const [page, setPage] = useState(1);

  useEffect(() => {
    setPage(1);
  }, [filters]);

  return (
    <FiltersContext.Provider value={{ filters, setFilters, page, setPage }}>
      {children}
    </FiltersContext.Provider>
  );
};

export default FiltersContext;
