import axios from 'axios';
import { BASE_URL, MAX_RESULTS } from '../constants/api';
import { GoogleResponse } from '../types/googleResponse';
import { LoaderFunctionArgs } from 'react-router-dom';

export interface BooksProps {
  searchTerm: string;
  category: string;
  page: number;
  sort: string;
}

export const googleBooksApi = {
  async getBooks({ searchTerm, category = '', page = 0, sort = 'relevance' }: BooksProps) {
    const startIndex = MAX_RESULTS * page;

    const { data } = await axios.get<GoogleResponse>(
      `${BASE_URL}?q=intitle:${searchTerm}+subject:${category}&maxResults=${MAX_RESULTS}&startIndex=${startIndex}&orderBy=${sort}&key=${
        import.meta.env.VITE_API_KEY
      }`
    );

    return data;
  },
  async getBook({ params }: LoaderFunctionArgs) {
    const { data } = await axios.get(`${BASE_URL}/${params.id}`);
    return data;
  },
};
