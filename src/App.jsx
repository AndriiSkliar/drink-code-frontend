// @ts-nocheck
import { Route, Routes } from 'react-router-dom';
// import { lazy } from 'react';
// import { AppWrapper } from './App.styled';
import WelcomePage from './pages/WelcomePage/WelcomePage';
import HomePage from './pages/HomePage/HomePage'
import SharedLayout from 'components/SharedLayout/SharedLayout';
import ErrorPage from 'pages/ErrorPage/ErrorPage';
import FavoritesPage from 'pages/FavoritesPage/FavoritesPage';
import SignUpPage from './pages/SignUpPage/signUpPage';

// const test = import.meta.env.VITE_API_TEST;

// const WelcomePage = lazy(() => import('pages/WelcomePage/WelcomePage'));
// const HomePage = lazy(() => import('pages/HomePage/HomePage'));
// const ErrorPage = lazy(() => import('pages/ErrorPage/ErrorPage'));
// const FavoritesPage = lazy(() => import('pages/FavoritesPage/FavoritesPage'));
// const SignUpPage = lazy(() => import('pages/SignUpPage/signUpPage'));

function App() {
  return (
      <Routes>
      <Route path="/welcome" element={<WelcomePage />} /> 
      <Route path="/signup" element={<SignUpPage />} />
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
