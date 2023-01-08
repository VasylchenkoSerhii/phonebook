import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from 'components/App/App';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from 'redux/store';
import { theme } from './theme';


ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter basename="/phonebook">
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <App />
          </PersistGate>
        </Provider>
      </ThemeProvider>
    </BrowserRouter>
);
