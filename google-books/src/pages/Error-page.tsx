import { useRouteError } from 'react-router-dom';
import { FallbackComponent } from '../app/providers/ErrorBoundary/FallbackComponent';

export default function ErrorPage() {
  const error = useRouteError();

  return <FallbackComponent error={error} />;
}
