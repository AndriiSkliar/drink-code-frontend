// @ts-nocheck
import { Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import authSelectors from './redux/auth/authSelectors';
import SharedLayout from './components/SharedLayout/SharedLayout';
import PublicRoute from './helpers/PublicRoute';
import WelcomePage from './pages/WelcomePage/WelcomePage';
import SignUpPage from './pages/SignUpPage/signUpPage';
import SignInPage from './pages/SignInPage/SignInPage';
import { lazy, useEffect } from 'react';
import { refreshThunk } from './redux/auth/authOperations';

const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const ErrorPage = lazy(() => import('./pages/ErrorPage/ErrorPage'));
const FavoritesPage = lazy(() => import('./pages/FavoritesPage/FavoritesPage'));
const AddDrinkPage = lazy(() => import('./pages/AddDrinkPage/AddDrinkPage'));
const DrinksPage = lazy(() => import('./pages/DrinksPage/DrinksPage'));
const MyDrinksPage = lazy(() => import('./pages/MyDrinksPage/MyDrinksPage'));
const DrinkPage = lazy(() => import('./pages/DrinkPage/DrinkPage'));

import AddDrinkForm from './components/AddDrink/AddDrinkForm';
import DrinkDescription from './components/AddDrink/DrinkDescription/DrinkDescription';

function App() {
  const isLoggedIn = useSelector(authSelectors.selectIsLoggedIn);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshThunk());
  }, [dispatch]);

  return (
    <Routes>
      <Route
        path="/welcome"
        element={
          <PublicRoute
            redirectTo="/home"
            isLoggedIn={isLoggedIn}
            component={<WelcomePage />}
          />
        }
      />

      <Route
        path="/signin"
        element={
          <PublicRoute
            redirectTo="/home"
            isLoggedIn={isLoggedIn}
            component={<SignInPage />}
          />
        }
      />

      <Route
        path="/signup"
        element={
          <PublicRoute
            redirectTo="/home"
            isLoggedIn={isLoggedIn}
            component={<SignUpPage />}
          />
        }
      />
      <Route path="/" element={<SharedLayout />}>
        <Route index path="/home" element={<HomePage />} />
        <Route path="/drinks" element={''} />
        <Route path="/add" element={<AddDrinkForm />} />
        <Route path="/my" element={''} />
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="/drink/:drinkId" element={<DrinkPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  );
}
export default App;
