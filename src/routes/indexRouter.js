import React from 'react';
import { ROUTE_HOME_PAGE } from '../CONST/list-local-routs/list-routes-public';

const HomePage = React.lazy(() => import('../pages/HomePage/HomePage'));

export const PUBLIC_ROUTER = [
  {
    path: ROUTE_HOME_PAGE.getFullUrl(),
    page: HomePage,
    hideAfterLogin: false,
  },
];

export const PROTECT_ROUTER = [];
