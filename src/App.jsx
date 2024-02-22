// @ts-nocheck
import { Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import authSelectors from './redux/auth/authSelectors';
import SharedLayout from './components/SharedLayout/SharedLayout';
import PublicRoute from './helpers/PublicRoute';
import { lazy } from 'react';

const WelcomePage = lazy(() => import('src/pages/WelcomePage/WelcomePage'));
const HomePage = lazy(() => import('src/pages/HomePage/HomePage'));
const ErrorPage = lazy(() => import('src/pages/ErrorPage/ErrorPage'));
const FavoritesPage = lazy(() => import('src/pages/FavoritesPage/FavoritesPage'));
const SignUpPage = lazy(() => import('src/pages/SignUpPage/SignUpPage'));
const SignInPage = lazy(() => import('src/pages/SignInPage/SignInPage'));
const AddDrinkPage = lazy(() => import('src/pages/AddDrinkPage/AddDrinkPage'));
const DrinksPage = lazy(() => import('src/pages/DrinksPage/DrinksPage'));
const MyDrinksPage = lazy(() => import('src/pages/MyDrinksPage/MyDrinksPage'));

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
          <Route path='/drinks' element={<DrinksPage />}/>
          <Route path='/add' element={<AddDrinkPage />}/>
          <Route path='/my' element={<MyDrinksPage />}/>
          <Route path="/favorites" element={<FavoritesPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
  );
}
export default App;
