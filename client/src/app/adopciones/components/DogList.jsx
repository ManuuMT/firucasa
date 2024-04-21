'use client';
import useDogs from '@/hooks/useDogs';
import FiltersContext from '@/context/filtersContext';
import { useContext } from 'react';
import DogItem from './DogItem';

export default function DogList() {
  // * Hooks
  const { data, isError, isPlaceholderData, isLoading } = useDogs();
  const { page, setPage } = useContext(FiltersContext);

  // * Methods
  const HandleResults = () => {
    if (data.totalResults === 1)
      return `${data.totalResults} resultado encontrado`;
    if (data.totalResults === 0) return `No se encontraron resultados`;

    return `${data.totalResults} resultados encontrados`;
  };

  return (
    <>
      {isLoading && <p>Cargando...</p>}
      {!isLoading && isError && <p>Error al cargar los datos</p>}
      {!isLoading && !isError && (
        <div className='w-[80%] h-full rounded-xl'>
          {/* Results */}
          <div className='w-full'>
            <h1 className='text-lg font-semibold'>{HandleResults()}</h1>
          </div>

          {data.totalResults > 0 && (
            <>
              {/* Title */}
              <div className='w-full flex justify-center'>
                <h1 className='text-2xl font-semibold text-center my-5'>
                  Listado de perros
                </h1>
              </div>

              {/* Dog list */}
              <div className='w-full flex flex-wrap justify-center gap-6'>
                {data.results.map(dog => (
                  <DogItem dog={dog} key={dog.id} />
                ))}
              </div>

              {/* Pagination */}
              <div className='w-full flex justify-center mt-5 gap-6'>
                <button
                  onClick={() => setPage(pre => Math.max(pre - 1, 1))}
                  disabled={page === 1}
                  className='bg-card text-foreground px-4 py-2 rounded-md'
                >
                  {`<-- Anterior`}
                </button>
                <button
                  onClick={() => {
                    setPage(pre => (data?.hasNextPage ? pre + 1 : pre));
                  }}
                  disabled={isPlaceholderData || !data?.hasNextPage}
                  className='bg-card text-foreground px-4 py-2 rounded-md'
                >
                  {`Siguiente -->`}
                </button>
              </div>
            </>
          )}
        </div>
      )}
    </>
  );
}
