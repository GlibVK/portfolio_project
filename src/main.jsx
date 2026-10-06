import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { router } from './router.jsx';
import '@fontsource/anton/latin-400.css';
import '@fontsource/roboto/latin-400.css';
import '@fontsource/roboto/latin-500.css';
import '@fontsource/roboto/latin-700.css';
import './styles.css';

createRoot(document.getElementById('root')).render(
  <StrictMode><RouterProvider router={router} /></StrictMode>,
);
