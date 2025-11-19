import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext';

const ProtectedRoute = ({ children }) => {
  const { authUser } = useAuthContext();
  const navigation = useNavigate();
  if (!authUser) {
    return navigation('/login');
  }

  return children;
};

export default ProtectedRoute;
