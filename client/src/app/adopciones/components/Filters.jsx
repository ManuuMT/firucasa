"use client";

import { useContext } from "react";
import { Badge } from "@/components/ui/badge";
import { TiLocation } from "react-icons/ti";
import { LuSettings2 } from "react-icons/lu";
import { Combobox } from "@/components/ui/combobox";
import FiltersContext from "@/context/filtersContext";

const genders = [
  {
    value: "Macho",
    label: "Macho",
  },
  {
    value: "Hembra",
    label: "Hembra",
  },
];

const gendersObj = {
  macho: "MALE",
  hembra: "FEMALE",
};

export default function Filters() {
  const { filters, setFilters } = useContext(FiltersContext);

  return (
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
          data={genders}
          selectText="Elige un género"
          noResultsText="No hay resultados encontrados"
          searchText="Buscar..."
          setChanges={(value) =>
            setFilters({ ...filters, gender: gendersObj[value] })
          }
        />
      </div>
    </aside>
  );
}
