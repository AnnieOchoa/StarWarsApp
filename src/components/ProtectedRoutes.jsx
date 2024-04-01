import { useContext } from 'react';
import { SessionContext } from '../context/SessionContext';
import { Navigate, Outlet } from 'react-router';

const ProtectedRoutes = () => {
  const { sessionData } = useContext(SessionContext);
  const userData = JSON.parse(window.localStorage.getItem('sessionInfo'));
  if (sessionData.user || userData?.email) return <Outlet />;
  return <Navigate to="/auth/login" />;
};

export default ProtectedRoutes;
