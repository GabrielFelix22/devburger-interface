import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import { Elements } from '@stripe/react-stripe-js';
import { ThemeProvider } from 'styled-components';
import stripePromise from './config/stripeConfig';
import AppProvider from './hooks';
import { router } from './routes';
import GlobalStyles from './styles/globalStyles';
import { standardTheme } from './styles/themes/standard';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={{ standardTheme }}>
      <AppProvider>
        <Elements stripe={stripePromise}>
          <RouterProvider router={router} />
        </Elements>
        <GlobalStyles />
        <ToastContainer autoClose={2000} theme="colored" />
      </AppProvider>
    </ThemeProvider>
  </StrictMode>,
);
