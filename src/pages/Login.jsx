import { useDispatch } from 'react-redux';
import Alert from '@mui/material/Alert';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import { authSlice } from 'redux/auth/auth-slice';
import { useAuth } from 'hooks';
import LoginForm from 'components/LoginForm/LoginForm';

export default function Login() {
  const { loginError } = useAuth();
  const dispatch = useDispatch();
  return (
    <>
      <LoginForm />
      {loginError && (
        <Alert
          severity="error"
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                dispatch(authSlice.actions.resetState());
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          sx={{ mb: 2 }}
        >
          {loginError}
        </Alert>
      )}
    </>
  );
}
