import { ResponseItem } from '../../../../types/googleResponse';

export interface LibrarySchema {
  page: number;
  // booksProps: BooksProps;
  totalItems: number;
  items: ResponseItem[] | undefined;
  searchTerm: string;
  category: string;
  sort: string;
}
