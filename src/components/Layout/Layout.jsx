import React from 'react';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Main, Container } from './Layout.styled';
import AppBar from 'components/AppBar/AppBar';
import Background from 'components/Background';

export default function Layout() {
  return (
    <Main>
      <Container>
        <AppBar />
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
        <ToastContainer position="top-right" autoClose={5000} theme="light" />
      </Container>
      <Background />
    </Main>
  );
}
