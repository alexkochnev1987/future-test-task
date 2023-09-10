import { Provider } from 'react-redux';
import { ErrorBoundary } from './providers/ErrorBoundary/ErrorBoundary';
import { FallbackComponent } from './providers/ErrorBoundary/FallbackComponent';
import { AppRouter } from './providers/RouterProvider/ui/AppRouter';
import store from './providers/StoreProvider/store';

function App() {
  return (
    <>
      <ErrorBoundary fallback={FallbackComponent}>
        <Provider store={store}>
          <AppRouter />
        </Provider>
      </ErrorBoundary>
    </>
  );
}

export default App;
