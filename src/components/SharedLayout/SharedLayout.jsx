// @ts-nocheck
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import HeaderMain from '../HeaderMain/HeaderMain';
import { Footer } from '../Footer/Footer';

const SharedLayout = () => {
  return (
    <>
      <HeaderMain />
      <Suspense fallback={<p>Loading...</p>}>
        <Outlet />
      </Suspense>
      <Footer />
    </>
  );
};

export default SharedLayout;
