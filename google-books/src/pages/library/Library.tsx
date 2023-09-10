import { useAppDispatch, useAppSelector } from '../../shared/hooks';
import { BooksSection } from './BooksSection';
import { Button } from 'react-bootstrap';
import { setPage } from './model/slice/library-slice';

export const Library = () => {
  const { totalItems, page } = useAppSelector((store) => store.library);
  const dispatch = useAppDispatch();
  const loadMoreBooks = () => dispatch(setPage(page + 1));

  return (
    <>
      <p className='text-center p-3'>Found {totalItems} results</p>
      <BooksSection page={0} />
      {Array(page)
        .fill(1)
        .map((_, index) => (
          <BooksSection page={index + 1} key={index} />
        ))}
      {totalItems > (page + 1) * 30 && <Button onClick={loadMoreBooks}>Load more</Button>}
    </>
  );
};
