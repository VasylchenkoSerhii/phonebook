import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { refreshUser } from 'redux/auth/operations';
import { useAuth } from 'hooks/useAuth';
// import PrivateRoute from 'components/PrivateRoute/PrivateRoute';
import Layout from 'components/Layout/Layout';
import Home from 'pages/Home/Home';
import Register from 'pages/Register';
import Login from 'pages/Login';
import Contacts from 'pages/Contacts';

export default function App() {
  const dispath = useDispatch();

  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispath(refreshUser());
  }, [dispath]);

  return isRefreshing ? (
    <p>Refreshing user...</p>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Route>
    </Routes>
  );
}
