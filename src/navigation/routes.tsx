import { lazy, Suspense } from 'react';
import Layout from '../layouts';

const Loadable = (Component: React.FC) => (
  <Suspense fallback={<h1>... loading ...</h1>}>
    <Component />
  </Suspense>
);

const Home = lazy(() => import('../pages/home'));

export const routes = [
  {
    element: <Layout />,
    children: [{ path: '/', element: Loadable(Home) }],
  },
  {
    path: '*',
    element: <Layout />,
    children: [{ path: '*', element: <h1>Page not found</h1> }],
  },
];
