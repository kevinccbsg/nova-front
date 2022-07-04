import React from 'react';
import ReactDOM from 'react-dom/client';
import { ToastContainer } from 'react-toastify';
import AppRoutes from './routes';
import './i18n';
import './index.scss';
import 'react-toastify/dist/ReactToastify.css';

const root = document.getElementById('root');

if (root) {
  ReactDOM.createRoot(root).render(
    <React.StrictMode>
      <AppRoutes />
      <ToastContainer />
    </React.StrictMode>,
  );
}
