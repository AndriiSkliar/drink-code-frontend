// @ts-nocheck
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import authSelectors from '/src/redux/auth/authSelectors.js';

export const PrivateRoute = ({ component: Component, redirectTo }) => {
    const isLoggedIn = useSelector(authSelectors.selectIsLoggedIn);
    const isRefreshing = useSelector(authSelectors.selectIsRefreshing);

    const shouldRedirect = !isLoggedIn && !isRefreshing;

  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
}
