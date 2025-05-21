import { lazy, Suspense, useMemo } from 'react';
import { Outlet } from 'react-router-dom';

import {  AuthGuard} from 'src/guard';



// Roles
// const StaffRolesList = lazy(() => import('src/pages/dashboard/settings/staff/roles'));

import { LoadingScreen } from 'src/components/loading-screen';

import { DashboardLayout } from 'src/layouts/dashboard/layout';
import { useUser } from 'src/hooks/use-user';
import { Home } from 'src/sections/home/view/home';
import { NetworkPage } from 'src/sections/home copy/view/network';

const IndexPage = lazy(() => import('src/pages/home'));

// ----------------------------------------------------------------------


const ProfilePage = lazy(() => import('src/pages/profile'));
const PostPage = lazy(() => import('src/pages/post'));



// const GeneralPage = lazy(() => import('src/pages/dashboard/user/general-account'));

// ----------------------------------------------------------------------

// Layout wrapper with a loading fallback
const layoutContent = (
  <DashboardLayout>
    <Suspense fallback={<LoadingScreen />}>
      <Outlet />
    </Suspense>
  </DashboardLayout>
);

// Component to determine routes based on role
const DashboardRoutesWrapper = () => {
  const { role } = useUser();
  const isManager = role?.toLowerCase() === 'manager';

  // Memoize routes to avoid unnecessary recalculations
  const routes = useMemo(() => {
    return [
      {
        path: 'dashboard',
        element: <AuthGuard>{layoutContent}</AuthGuard>,
        children: [
          { element: <Home />, index: true }, // Dynamic default page
          {
            path: 'network',
            children: [
              { element: <NetworkPage/>, index: true },
            ],
          },
          {
            path: 'profile',
            children: [
              { element: <ProfilePage/>, index: true },
            ],
          },
           {
            path: 'post',
            children: [
              { element: <PostPage/>, index: true },
            ],
          },

        ],
      },
    ];
  }, [isManager]);

  return routes;
};

// Export routes function
export const dashboardRoutes = DashboardRoutesWrapper;
