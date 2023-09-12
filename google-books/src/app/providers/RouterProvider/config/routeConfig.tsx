import { createBrowserRouter } from 'react-router-dom';
import { Layout } from '../../../../components/Layout';
import ErrorPage from '../../../../pages/Error-page';
import { Book } from '../../../../pages/Book';
import { Library } from '../../../../pages/library/Library';
import { googleBooksApi } from '../../../../services';

export const Router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Library />,
      },
      {
        path: '/:id',
        element: <Book />,
        loader: (p) => googleBooksApi.getBook(p),
      },
    ],
  },
]);
