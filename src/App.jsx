// @ts-nocheck
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import SharedLayout from './components/SharedLayout/SharedLayout';
import PublicRoute from './helpers/PublicRoute';
import WelcomePage from './pages/WelcomePage/WelcomePage';
import SignUpPage from './pages/SignUpPage/signUpPage';
import SignInPage from './pages/SignInPage/SignInPage';
import VerificationPage from './pages/VerificationPage/VerificationPage';
import { Suspense, lazy, useEffect } from 'react';
import { authOperations } from './redux/auth/authOperations';
import { PrivateRoute } from './helpers/PrivateRoute';
import { Loader } from './components/Loader/Loader';

const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const ErrorPage = lazy(() => import('./pages/ErrorPage/ErrorPage'));
const FavoritesPage = lazy(() => import('./pages/FavoritesPage/FavoritesPage'));
const AddDrinkPage = lazy(() => import('./pages/AddDrinkPage/AddDrinkPage'));
const DrinksPage = lazy(() => import('./pages/DrinksPage/DrinksPage'));
const MyDrinksPage = lazy(() => import('./pages/MyDrinksPage/MyDrinksPage'));

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.currentUser());
  }, [dispatch]);

  return (
    <Suspense fallback={<Loader/>}>
      <Routes>
        <Route path="/:id" element={<VerificationPage />} />
        <Route
          path="/welcome"
          element={<PublicRoute redirectTo="/" component={<WelcomePage />} />}
        />

        <Route
          path="/signin"
          element={<PublicRoute redirectTo="/" component={<SignInPage />} />}
        />

        <Route
          path="/signup"
          element={<PublicRoute redirectTo="/" component={<SignUpPage />} />}
        />
        <Route
          path="/"
          element={
            <PrivateRoute redirectTo="/welcome" component={<SharedLayout />} />
          }
        >
          <Route
            index
            element={
              <PrivateRoute redirectTo="/welcome" component={<HomePage />} />
            }
          />
          <Route
            path="/drinks"
            element={
              <PrivateRoute redirectTo="/welcome" component={<DrinksPage />} />
            }
          />
          <Route
            path="/add"
            element={
              <PrivateRoute
                redirectTo="/welcome"
                component={<AddDrinkPage />}
              />
            }
          />
          <Route
            path="/my"
            element={
              <PrivateRoute
                redirectTo="/welcome"
                component={<MyDrinksPage />}
              />
            }
          />
          <Route
            path="/favorites"
            element={
              <PrivateRoute redirectTo="/" component={<FavoritesPage />} />
            }
          />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
}
export default App;
