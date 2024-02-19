// @ts-nocheck
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import HeaderMain from '../HeaderMain/HeaderMain';

const SharedLayout = () => {
  return (
    <>
        <HeaderMain />
        <Suspense fallback={<p>Loading...</p>}>
          <Outlet />
        </Suspense>
        {/* Here will be Footer */}
    </>
  );
};

export default SharedLayout;
