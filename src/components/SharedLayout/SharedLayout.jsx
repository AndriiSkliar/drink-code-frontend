// @ts-nocheck
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import HeaderMain from '../HeaderMain/HeaderMain';
import { Footer } from '../Footer/Footer';
import FollowCursor from '../../components/FollowCursor/FollowCursor';

const SharedLayout = () => {
  return (
    <>
      <HeaderMain />
      <Suspense fallback={<p>Loading...</p>}>
        <Outlet />
      </Suspense>
      <Footer />
      <FollowCursor />
    </>
  );
};

export default SharedLayout;
