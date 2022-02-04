import React from 'react';
import {
  ROUTE_HOME_PAGE,
  ROUTE_LOGIN_PAGE,
  ROUTE_REGISTRATION_PAGE,
} from '../CONST/list-local-routs/list-routes-public';

const HomePage = React.lazy(() => import('../pages/HomePage/HomePage'));
const LoginPage = React.lazy(() => import('../pages/LoginPage/LoginPage'));
const RegistrationPage = React.lazy(() =>
  import('../pages/RegisterPage/RegisterPage')
);

export const PUBLIC_ROUTER = [
  {
    path: ROUTE_HOME_PAGE.getFullUrl(),
    page: HomePage,
    hideAfterLogin: false,
  },
  {
    path: ROUTE_LOGIN_PAGE.getFullUrl(),
    page: LoginPage,
    hideAfterLogin: false,
  },
  {
    path: ROUTE_REGISTRATION_PAGE.getFullUrl(),
    page: RegistrationPage,
    hideAfterLogin: false,
  },
];

export const PROTECT_ROUTER = [];
