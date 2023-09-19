import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import MainPage from '../../pages/main-page/main-page';
import SignIn from '../sign-in/sign-in';
import MyList from '../my-list/my-list';
import MoviePage from '../movie-page/movie-page';
import AddReview from '../add-review/add-review';
import Player from '../player/player';
import Page404 from '../page-404/page-404';
import PrivateRoute from '../private-route/private-route';

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

          <Route
            path={AppRoute.MyList}
            element={
              <PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}>
                <MyList />
              </PrivateRoute>
            }
          />

          <Route path={AppRoute.Films}>
            <Route index element={<Page404 />} />
            <Route path={AppRoute.Film}>
              <Route index element={<MoviePage />} />
              <Route path={AppRoute.AddReview} element={<AddReview />} />
            </Route>
            <Route path="*" element={<Page404 />} />
          </Route>
          <Route path={AppRoute.Player} element={<Player />} />
        </Route>
        <Route path="*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
