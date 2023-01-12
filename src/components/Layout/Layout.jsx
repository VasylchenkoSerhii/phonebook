import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAuth } from 'hooks';
import { Main, Container } from './Layout.styled';
import AppBar from 'components/AppBar/AppBar';

export default function Layout() {
  const { registerError, loginError } = useAuth();

  if (registerError) toast('Error during registration');
  if (loginError) toast('An error occurred during authorization');
  return (
    <Main>
      <Container>
        <AppBar />
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
        <ToastContainer position="top-right" autoClose={5000} theme="light" />
      </Container>
    </Main>
  );
}
