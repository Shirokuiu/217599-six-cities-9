import appRouting from 'src/components/pages/app/app-routing';
import { AppProps } from 'src/types/app';

function App(props: AppProps) {
  return appRouting(props);
}

export default App;
