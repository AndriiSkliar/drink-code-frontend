/* eslint-disable react-hooks/exhaustive-deps */
// @ts-nocheck
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import SharedLayout from './components/SharedLayout/SharedLayout';
import PublicRoute from './helpers/PublicRoute';
import WelcomePage from './pages/WelcomePage/WelcomePage';
import SignUpPage from './pages/SignUpPage/signUpPage';
import SignInPage from './pages/SignInPage/SignInPage';
import VerificationPage from './pages/VerificationPage/VerificationPage';
import authSelectors from './redux/auth/authSelectors';
import { lazy, useEffect, useState } from 'react';
import { authOperations } from './redux/auth/authOperations';
import { PrivateRoute } from './helpers/PrivateRoute';

const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const ErrorPage = lazy(() => import('./pages/ErrorPage/ErrorPage'));
const FavoritesPage = lazy(() => import('./pages/FavoritesPage/FavoritesPage'));
const AddDrinkPage = lazy(() => import('./pages/AddDrinkPage/AddDrinkPage'));
const DrinksPage = lazy(() => import('./pages/DrinksPage/DrinksPage'));
const MyDrinksPage = lazy(() => import('./pages/MyDrinksPage/MyDrinksPage'));
const DrinkPage = lazy(() => import('./pages/DrinkPage/DrinkPage'));

function App() {
  const isLoggedIn = useSelector(authSelectors.selectIsLoggedIn);
  const location = useLocation();
  const navigate = useNavigate();
  const [currentPage] = useState(location.pathname);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.currentUser());
    navigate(currentPage);
  }, [dispatch]);


  return (
    <Routes>
      <Route path="/user/:id" element={<VerificationPage />} />
      <Route
        path="/welcome"
        element={
          <PublicRoute
            redirectTo="/home"
            component={<WelcomePage />}
          />
        }
      />
      <Route
        path="/signup"
        element={
          <PublicRoute
            redirectTo="/home"
            component={<SignUpPage />}
          />
        }
      />

      <Route
        path="/signin"
        element={
          <PublicRoute
            redirectTo="/home"
            component={<SignInPage />}
          />
        }
      />
      <Route path="/" element={!isLoggedIn ? <WelcomePage /> : <SharedLayout />} >
        <Route
          index
          path='/home'
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
            <PrivateRoute redirectTo="/welcome" component={<AddDrinkPage />} />
          }
        />
        <Route
          path="/my"
          element={
            <PrivateRoute redirectTo="/welcome" component={<MyDrinksPage />} />
          }
        />
        <Route
          path="/favorites"
          element={
            <PrivateRoute redirectTo="/welcome" component={<FavoritesPage />} />
          }
        />
        <Route
          path="/drink/:id"
          element={
            <PrivateRoute redirectTo="/welcome" component={<DrinkPage />} />
          }
        />
        <Route path="*" element={<PrivateRoute redirectTo="/welcome" component={<ErrorPage />} />} />
      </Route>
    </Routes>
  );
}
export default App;
