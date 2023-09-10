import { Card, Col } from 'react-bootstrap';
import { ResponseItem } from '../types/googleResponse';
import { Link } from 'react-router-dom';
import { CSSProperties } from 'react';

export const BookCard = ({ book }: { book: ResponseItem }) => {
  const textStyle: CSSProperties = {
    maxWidth: '100%',
    display: '-webkit-box',
    WebkitBoxOrient: 'vertical',
    WebkitLineClamp: 3,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  };
  const shortTextStyle: CSSProperties = {
    maxWidth: '100%',
    display: '-webkit-box',
    WebkitBoxOrient: 'vertical',
    WebkitLineClamp: 2,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  };
  return (
    <Col>
      <Card
        style={{ width: '18rem', height: '420px', margin: '0 auto' }}
        bg='light'
        className='py-5 px-2'
      >
        <Link to={`/${book.id}`}>
          <Card.Img
            variant='top'
            className='shadow-lg'
            src={book.volumeInfo?.imageLinks?.thumbnail}
            style={{ height: '180px', objectFit: 'scale-down', display: 'block' }}
          />
        </Link>
        <Card.Body>
          <Card.Text>{book.volumeInfo.categories?.[0] || 'No category'}</Card.Text>
          <h5 style={textStyle}>{book.volumeInfo.title}</h5>
          <Card.Text style={shortTextStyle}>{book.volumeInfo.authors?.join(', ')}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};
