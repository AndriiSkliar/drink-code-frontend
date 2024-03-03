import { Route, Routes, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { lazy, useEffect } from 'react';
import SharedLayout from './components/SharedLayout/SharedLayout';
import { PrivateRoute } from './helpers/PrivateRoute';
import PublicRoute from './helpers/PublicRoute';
import WelcomePage from './pages/WelcomePage/WelcomePage';
import SignUpPage from './pages/SignUpPage/signUpPage';
import SignInPage from './pages/SignInPage/SignInPage';
import VerificationPage from './pages/VerificationPage/VerificationPage';
import { selectIsLoggedIn } from './redux/selectors/auth.selectors';
import { authOperations } from './redux/auth/auth.operations';

const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const ErrorPage = lazy(() => import('./pages/ErrorPage/ErrorPage'));
const FavoritesPage = lazy(() => import('./pages/FavoritesPage/FavoritesPage'));
const AddDrinkPage = lazy(() => import('./pages/AddDrinkPage/AddDrinkPage'));
const DrinksPage = lazy(() => import('./pages/DrinksPage/DrinksPage'));
const MyDrinksPage = lazy(() => import('./pages/MyDrinksPage/MyDrinksPage'));
const DrinkPage = lazy(() => import('./pages/DrinkPage/DrinkPage'));

function App() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const location = useLocation();
  const dispatch = useDispatch();

  if(isLoggedIn && location.pathname === "/") {
    location.pathname = "/home";
  }

  useEffect(() => {
    dispatch(authOperations.currentUser());
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
