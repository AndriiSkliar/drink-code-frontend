// @ts-nocheck
import { Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import authSelectors from './redux/auth/authSelectors';
import WelcomePage from './pages/WelcomePage/WelcomePage';
import HomePage from './pages/HomePage/HomePage'
import SharedLayout from 'components/SharedLayout/SharedLayout';
import ErrorPage from 'pages/ErrorPage/ErrorPage';
import FavoritesPage from 'pages/FavoritesPage/FavoritesPage';
import SignUpPage from './pages/SignUpPage/signUpPage';
import SignInPage from './pages/SignInPage/SignInPage';
import PublicRoute from './helpers/PublicRoute';

function App() {

  const isLoggedIn = useSelector(authSelectors.selectIsLoggedIn);

  return (
      <Routes>
        <Route path="/welcome" element={
            <PublicRoute
              redirectTo="/home"
              isLoggedIn={isLoggedIn}
              component={<WelcomePage />}
            />
          }
        />

        <Route path="/signin" element={
            <PublicRoute
              redirectTo="/home"
              isLoggedIn={isLoggedIn}
              component={<SignInPage />}
            />
          }
        />

        <Route path="/signup" element={
            <PublicRoute
              redirectTo="/home"
              isLoggedIn={isLoggedIn}
              component={<SignUpPage />}
            />
          }
        />
        <Route path="/" element={<SharedLayout />}>
          <Route index path="/home" element={<HomePage />}/>
          <Route path='/drinks' element={''}/>
          <Route path='/add' element={''}/>
          <Route path='/my' element={''}/>
          <Route path="/favorites" element={<FavoritesPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
  );
}
export default App;
