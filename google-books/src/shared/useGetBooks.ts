import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from './hooks';
import { ResponseItem } from '../types/googleResponse';
import { googleBooksApi } from '../services';
import { setTotalItems } from '../pages/library/model/slice/library-slice';

export const useGetBooks = (page: number) => {
  const category = useAppSelector((state) => state.library.category);
  const searchTerm = useAppSelector((state) => state.library.searchTerm);
  const sort = useAppSelector((state) => state.library.sort);
  const dispatch = useAppDispatch();
  const [items, setItems] = useState<ResponseItem[]>();
  const [error, setError] = useState<string>();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getBooks = async () => {
      if (!searchTerm) return;
      setLoading(true);
      try {
        const response = await googleBooksApi.getBooks({ category, searchTerm, sort, page });
        setItems(response.items);
        if (page === 0) {
          dispatch(setTotalItems(response.totalItems));
        }
      } catch (error) {
        setItems(undefined);
        setError('Fetch books failed');
      } finally {
        setLoading(false);
      }
    };
    getBooks();
  }, [category, searchTerm, sort, dispatch, page]);
  return { items, error, loading };
};
