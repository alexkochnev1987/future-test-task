import { Button, Col, Container, Form, FormLabel, FormSelect, Navbar, Row } from 'react-bootstrap';
import { CATEGORY_SELECT_OPTIONS, SORT_SELECT_OPTIONS } from '../constants/select';
import { useNavigate } from 'react-router-dom';
import { ChangeEvent, FormEvent, useState } from 'react';
import { useAppDispatch } from '../shared/hooks';
import { setBooksProps } from '../pages/library/model/slice/library-slice';
import { BooksProps } from '../services';
export function NavBar() {
  const navigate = useNavigate();
  const initialValues: BooksProps = { searchTerm: '', category: '', page: 0, sort: 'Relevance' };

  const [values, setValues] = useState(initialValues);

  const dispatch = useAppDispatch();

  const handleOnChange = (e: ChangeEvent<any>) => {
    const { name, value } = e.target;

    setValues({ ...values, [name]: value });
  };
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (values.searchTerm === '') {
      return;
    }
    dispatch(setBooksProps(values));
    navigate('/');
  };
  return (
    <Navbar className='bg-body-tertiary' style={{ backgroundImage: "url('bg.jpg')" }}>
      <Container className='flex-column'>
        <Row>
          <h1 className='font-weight-bold text-white'>Search for books</h1>
        </Row>
        <Row>
          <Form onSubmit={handleSubmit}>
            <Row>
              <Col xs='auto'>
                <Form.Control
                  type='text'
                  placeholder='Search'
                  className=' mr-sm-2'
                  onChange={handleOnChange}
                  value={values.searchTerm}
                  name='searchTerm'
                />
              </Col>
              <Col xs='auto'>
                <Button type='submit'>Submit</Button>
              </Col>
            </Row>
            <Row className='justify-content-center'>
              <Col>
                <FormLabel className='text-white'>Categories:</FormLabel>
                <FormSelect onChange={handleOnChange} value={values.category} name='category'>
                  {CATEGORY_SELECT_OPTIONS.map(({ name, value }, index) => (
                    <option key={index} value={value}>
                      {name}
                    </option>
                  ))}
                </FormSelect>
              </Col>
              <Col>
                <FormLabel className='text-white'>Sorting By:</FormLabel>
                <FormSelect onChange={handleOnChange} value={values.sort} name='sort'>
                  {SORT_SELECT_OPTIONS.map(({ name, value }, index) => (
                    <option key={index} value={value}>
                      {name}
                    </option>
                  ))}
                </FormSelect>
              </Col>
            </Row>
          </Form>
        </Row>
      </Container>
    </Navbar>
  );
}
