import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext';
import { useEffect } from 'react';

const PublicRoute = ({ children }) => {
  const { authUser } = useAuthContext();
  const navigation = useNavigate();

  useEffect(() => {
    if (authUser) {
      return navigation('/');
    }
  }, [authUser, navigation]);
  return children;
};

export default PublicRoute;
