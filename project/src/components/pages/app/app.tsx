import MainPage from 'src/components/pages/main-page/main-page';
import { AppProps } from 'src/types';

function App(props: AppProps) {
  return <MainPage {...props} />;
}

export default App;
