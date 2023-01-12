import { useSelector } from 'react-redux';
import {
  selectIsLoggedIn,
  selectUser,
  selectIsRefreshing,
  selectRegisterError,
  selectLoginError,
} from 'redux/selectors';

export const useAuth = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);
  const user = useSelector(selectUser);
  const registerError = useSelector(selectRegisterError);
  const loginError = useSelector(selectLoginError);

  return {
    isLoggedIn,
    isRefreshing,
    user,
    loginError,
    registerError,
  };
};
