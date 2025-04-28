import { lazy, Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { AuthSplitLayout } from 'src/layouts/auth-split';

import { SplashScreen } from 'src/components/loading-screen';
import { AuthCenteredLayout } from 'src/layouts/auth-centered-login';
import { AuthCenteredLoginLayout } from 'src/layouts/auth-centered-login/layout';

const SignInPage = lazy(() => import('src/pages/auth/sign-in'));
const SignUpPage = lazy(() => import('src/pages/auth/sign-up'));
// const ForgotPassword = lazy(() => import('src/pages/auth/forgot-password'));
// const ResetPassword = lazy(() => import('src/pages/auth/reset-password'));

export const authRoutes = [
  {
    path: 'auth',
    element: (
      <Suspense fallback={<SplashScreen />}>
        <Outlet />
      </Suspense>
    ),
    children: [
      {
        path: 'sign-up',
        element: (
            <AuthCenteredLayout>
              <SignUpPage />
            </AuthCenteredLayout>
        ),
      },
      {
        path: 'sign-in',
        element: (
            <AuthCenteredLoginLayout>
              <SignInPage />
            </AuthCenteredLoginLayout>
        ),
      },
      // {
      //   path: 'forgot-password',
      //   element: (
      //     <AuthGuard>
      //       <AuthSplitLayout>
      //         <ForgotPassword />
      //       </AuthSplitLayout>
      //     </AuthGuard>
      //   ),
      // },
      // {
      //   path: 'reset-password',
      //   element: (
      //     <GuestGuard>
      //       <AuthSplitLayout>
      //         <ResetPassword />
      //       </AuthSplitLayout>
      //     </GuestGuard>
      //   ),
      // },
    ],
  },
];
