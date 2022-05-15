import { lazy } from 'react';

// Project Imports
import AdminLayout from 'layout/AdminLayout';
import Loadable from 'components/Loadable';
import AuthGuard from 'utils/route-guard/AuthGuard';

// dashboard page routing
const DashboardDefault = Loadable(
  lazy(() => import('views/dashboard/Default'))
);

// ==============================|| ADMIN ROUTING ||============================== //

const AdminRoutes = {
  path: '/',
  element: (
    <AuthGuard>
      <AdminLayout />
    </AuthGuard>
  ),
  children: [
    {
      path: '/dashboard/default',
      element: <DashboardDefault />,
    },
  ],
};

export default AdminRoutes;
