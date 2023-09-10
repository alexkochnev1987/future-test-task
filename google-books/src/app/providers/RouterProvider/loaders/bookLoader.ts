import { LoaderFunctionArgs } from 'react-router-dom';
import { GoogleResponse } from '../../../../types/googleResponse';

const createSearchUrl = (query: string) =>
  `https://www.googleapis.com/books/v1/volumes?q=${query}&maxResults=30&key=${
    import.meta.env.VITE_API_KEY
  }`;

export async function fetchBooks(query: string) {
  const response = await fetch(createSearchUrl(query.toLowerCase()));
  const books: GoogleResponse = await response.json();
  return books;
}

('https://www.googleapis.com/books/v1/volumes/BIyZzwEACAAJ');

export async function bookLoader({ params }: LoaderFunctionArgs) {
  const response = await fetch('https://www.googleapis.com/books/v1/volumes/' + params.id);
  const books: GoogleResponse = await response.json();
  return books;
}
