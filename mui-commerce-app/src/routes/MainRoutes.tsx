import { lazy } from 'react';

// Project Imports
import Loadable from 'components/Loadable';
import MainLayout from 'layout/MainLayout';

const Commerce = Loadable(lazy(() => import('views/pages/ecommerce')));

const ProductDetails = Loadable(
  lazy(() => import('views/pages/ecommerce/ProductDetails'))
);
const Checkout = Loadable(lazy(() => import('views/pages/ecommerce/Checkout')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: '/commerce',
      element: <Commerce />,
    },
    {
      path: '/commerce/product-details/:id',
      element: <ProductDetails />,
    },
    {
      path: '/commerce/checkout',
      element: <Checkout />,
    },
  ],
};

export default MainRoutes;
