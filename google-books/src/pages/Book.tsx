import { Card, Col, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import { ResponseItem } from '../types/googleResponse';
import { CSSProperties } from 'react';

export const Book = () => {
  const book = useLoaderData() as ResponseItem;

  const justifyText: CSSProperties = { textAlign: 'justify', textJustify: 'inter-word' };

  return (
    <Row style={{ minHeight: '50vh' }} xs={1} sm={1} md={2} lg={2} xl={2}>
      <Col className='d-flex align-items-center bg-light py-4 px-5'>
        <Card.Img
          variant='top'
          className='shadow-lg'
          src={book.volumeInfo?.imageLinks?.thumbnail}
          style={{ width: '100%', objectFit: 'contain', display: 'block' }}
        />
      </Col>
      <Col>
        <Card.Body className='py-4 px-4'>
          <h5 className='fs-6' style={justifyText}>
            {book.volumeInfo.categories?.join(', ') || 'No category'}
          </h5>
          <h2 className='fs-1'>{book.volumeInfo.title}</h2>
          <p className='fs-4'>{book.volumeInfo.authors?.join(', ')}</p>
          {book.volumeInfo.description
            ?.replace(/<p>/g, '')
            .split('</p>')
            .map((text) => (
              <Card.Text key={text} className='fs-6' style={justifyText}>
                {text}
              </Card.Text>
            ))}
        </Card.Body>
      </Col>
    </Row>
  );
};
