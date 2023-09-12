import { Button, Container } from 'react-bootstrap';
import { isRouteErrorResponse } from 'react-router-dom';

export interface FallbackComponentProps {
  error: Error;
}
function errorMessage(error: unknown): string {
  if (isRouteErrorResponse(error)) {
    return `${error.status} ${error.statusText}`;
  } else if (error instanceof Error) {
    return error.message;
  } else if (typeof error === 'string') {
    return error;
  } else {
    console.error(error);
    return 'Unknown error';
  }
}

export const FallbackComponent = ({ error }: { error: Error | unknown }) => {
  const reloadPage = () => {
    location.reload();
  };

  return (
    <Container>
      <h1 className='text-warning'>Error happens</h1>

      <h3>Reload Page</h3>
      <h4>Error {errorMessage(error)}</h4>
      <Button onClick={reloadPage} variant='primary'>
        Reload Page
      </Button>
    </Container>
  );
};
