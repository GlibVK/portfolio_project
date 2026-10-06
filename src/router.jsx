import { createBrowserRouter } from 'react-router-dom';
import Layout from './components/Layout.jsx';
import Portfolio from './pages/Portfolio.jsx';
import NotFound from './pages/NotFound.jsx';
import RouteError from './pages/RouteError.jsx';

export const router = createBrowserRouter([{
  element: <Layout />,
  hydrateFallbackElement: <main className="project-page" aria-busy="true"><p role="status">Loading portfolio…</p></main>,
  errorElement: <RouteError />,
  children: [
    { path: '/', element: <Portfolio /> },
    { path: '/projects/:slug', lazy: async () => ({ Component: (await import('./pages/ProjectPage.jsx')).default }) },
    { path: '*', element: <NotFound /> },
  ],
}]);
