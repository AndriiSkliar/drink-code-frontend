// @ts-nocheck
import { Route, Routes } from 'react-router-dom';
// import { AppWrapper } from './App.styled';
import WelcomePage from './pages/WelcomePage/WelcomePage';

import SharedLayout from 'components/SharedLayout/SharedLayout';
import ErrorPage from 'pages/ErrorPage/ErrorPage';
import FavoritesPage from 'pages/FavoritesPage/FavoritesPage';

// const test = import.meta.env.VITE_API_TEST;

function App() {
  return (
      <Routes>
        <Route path="/welcome" element={<WelcomePage />}/>    
        <Route path="/" element={<SharedLayout />}>
          <Route index path="/home" element={''}/>
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
