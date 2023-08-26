import MainPage from '../../pages/main-page/main-page';

type AppProps = {
  movieTitle: string;
  movieGenre: string;
  issueYear: string;
};

function App({ movieTitle, movieGenre, issueYear }: AppProps): JSX.Element {
  return (
    <MainPage title={movieTitle} genre={movieGenre} issueDate={issueYear} />
  );
}

export default App;
