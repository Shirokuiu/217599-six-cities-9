import MainPage from 'src/components/main-page/main-page';

interface AppProps {
  placesFound: number;
}

function App(props: AppProps) {
  return <MainPage {...props} />;
}

export default App;
