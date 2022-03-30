import AppRouting from 'src/components/pages/app/app-routing';
import { store } from 'src/store';
import { checkAuth } from 'src/store/user-process/api-actions';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    store.dispatch(checkAuth());
  }, []);

  return <AppRouting />;
}

export default App;
