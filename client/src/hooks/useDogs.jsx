import {
  useQuery,
  useQueryClient,
  keepPreviousData,
} from '@tanstack/react-query';
import getDogs from '@/services/dogs/getDogs';
import { useContext, useEffect } from 'react';
import FiltersContext from '@/context/filtersContext';

export default function useDogs() {
  const { filters, page } = useContext(FiltersContext);
  const queryClient = useQueryClient();

  const { data, isError, isPlaceholderData, isLoading } = useQuery({
    queryKey: ['dogs', page, filters],
    queryFn: () => getDogs(page, filters),
    placeholderData: keepPreviousData,
    staleTime: 5000,
  });

  // Prefetch the next page
  useEffect(() => {
    if (!isPlaceholderData && data?.hasNextPage) {
      queryClient.prefetchQuery({
        queryKey: ['dogs', page + 1],
        queryFn: () => getDogs(page + 1),
      });
    }
  }, [data, isPlaceholderData, page, queryClient]);

  return { page, data, isError, isPlaceholderData, isLoading };
}
