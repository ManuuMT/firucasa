'use client';

import { useContext } from 'react';
import { Badge } from '@/components/ui/badge';
import { TiLocation } from 'react-icons/ti';
import { LuSettings2 } from 'react-icons/lu';
import { ComboboxShadcn } from '@/components/ui/comboboxShadcn';
import FiltersContext from '@/context/filtersContext';
import { dogSize, dogSizeObj, genders, gendersObj } from '@/models/dog.model';

export default function Filters() {
  const { filters, setFilters } = useContext(FiltersContext);

  return (
    <aside className='w-[20%] bg-card h-fit rounded-xl flex flex-col shadow-md'>
      <div className='w-full flex justify-center'>
        <h1 className='text-2xl font-semibold text-center my-5 flex items-center gap-2'>
          <LuSettings2 />
          Filtros de búsqueda
        </h1>
      </div>
      <div className='w-full flex flex-col gap-4 p-4'>
        <Badge
          variant='default'
          className='py-2 w-fit cursor-default text-base'
        >
          <TiLocation />
          Galicia
        </Badge>
        <ComboboxShadcn
          data={genders}
          selectText='Género'
          noResultsText='No hay resultados encontrados'
          searchText='Buscar...'
          setChanges={value => {
            value === 'Todos'
              ? setFilters({ ...filters, gender: '' })
              : setFilters({ ...filters, gender: gendersObj[value] });
          }}
        />
        <ComboboxShadcn
          data={dogSize}
          selectText='Tamaño'
          noResultsText='No hay resultados encontrados'
          searchText='Buscar...'
          setChanges={value => {
            value === 'Todos'
              ? setFilters({ ...filters, size: '' })
              : setFilters({ ...filters, size: dogSizeObj[value] });
          }}
        />
      </div>
    </aside>
  );
}
