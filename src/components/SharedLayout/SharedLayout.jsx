// @ts-nocheck
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from 'components/Header/Header';
import { Container } from './SharedLayout.styled';

const SharedLayout = () => {
  return (
    <>
      <Container>
        <Header />
        <Suspense fallback={<p>Loading...</p>}>
          <Outlet />
        </Suspense>
        {/* Here will be Footer */}
      </Container>
    </>
  );
};

export default SharedLayout;
