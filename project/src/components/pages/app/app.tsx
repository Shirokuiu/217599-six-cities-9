import { AppProps } from 'src/types';
import appRouting from 'src/components/pages/app/app-routing';

function App(props: AppProps) {
  return appRouting(props);
}

export default App;
