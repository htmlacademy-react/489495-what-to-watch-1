import { AppRoute } from '../../const';
import MainPage from '../../pages/main-page/main-page';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignIn from '../sign-in/sign-in';
import MyList from '../my-list/my-list';
// import MoviePage from '../movie-page/movie-page';
// import Player from '../player/player';
import Page404 from '../page-404/page-404';
import MoviePage from '../movie-page/movie-page';
import AddReview from '../add-review/add-review';
import Player from '../player/player';

type AppProps = {
  movieTitle: string;
  movieGenre: string;
  issueYear: string;
};

function App({ movieTitle, movieGenre, issueYear }: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Main}>
          <Route
            index
            element={
              <MainPage
                title={movieTitle}
                genre={movieGenre}
                issueDate={issueYear}
              />
            }
          />
          <Route path={AppRoute.SignIn} element={<SignIn />} />
          <Route path={AppRoute.MyList} element={<MyList />} />
          <Route path={AppRoute.Films}>
            <Route path={AppRoute.Film}>
              <Route index element={<MoviePage />} />
              <Route path={AppRoute.AddReview} element={<AddReview />} />
            </Route>
          </Route>
          <Route path={AppRoute.Player} element={<Player />} />
        </Route>
        <Route path="*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
