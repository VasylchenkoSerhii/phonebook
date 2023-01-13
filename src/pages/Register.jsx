import { useDispatch } from 'react-redux';
import Alert from '@mui/material/Alert';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import { authSlice } from 'redux/auth/auth-slice';
import { useAuth } from 'hooks';
import RegisterForm from 'components/RegisterForm/RegisterForm';

export default function Register() {
  const { registerError } = useAuth();
  const dispatch = useDispatch();
  return (
    <>
      <RegisterForm />
      {registerError && (
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
          {registerError}
        </Alert>
      )}
    </>
  );
}
