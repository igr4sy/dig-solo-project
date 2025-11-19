import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext';

const PublicRoute = ({ children }) => {
  const { authUser } = useAuthContext();
  // console.log(authUser);

  const navigation = useNavigate();
  if (authUser) {
    return navigation('/');
  }

  return children;
};

export default PublicRoute;
