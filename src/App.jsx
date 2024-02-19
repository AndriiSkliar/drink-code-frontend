// @ts-nocheck
import { Route, Routes } from 'react-router-dom';
import SharedLayout from 'components/SharedLayout/SharedLayout';
import ErrorPage from 'pages/ErrorPage/ErrorPage';

function App() {
  return (
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index path="/home" element={''}/>
          <Route path='/drinks' element={''}/>
          <Route path='/add' element={''}/>
          <Route path='/my' element={''}/>
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
  );
}
export default App;
