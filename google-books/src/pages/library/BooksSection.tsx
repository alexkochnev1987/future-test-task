import { Row, Spinner } from 'react-bootstrap';
import { useGetBooks } from '../../shared/useGetBooks';
import { BookCard } from '../../components/BookCard';

export const BooksSection = ({ page }: { page: number }) => {
  const { items, error, loading } = useGetBooks(page);

  if (error) return <h1>{error}</h1>;
  return (
    <Row xs={1} md={2} lg={3} xl={4} className='g-4 p-0 pb-3'>
      {loading ? (
        <div className='w-100 d-flex items-center justify-content-center'>
          <Spinner animation='border' role='status'>
            <span className='visually-hidden'>Loading...</span>
          </Spinner>
        </div>
      ) : (
        <>
          {items && items.length > 0 && items.map((item) => <BookCard book={item} key={item.id} />)}
        </>
      )}
    </Row>
  );
};
