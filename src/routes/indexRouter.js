import React from 'react';
import {
  ROUTE_ALL_GAMES,
  ROUTE_BEST_SERIES_GAME,
  ROUTE_BLOG,
  ROUTE_DETAILS_PAGE,
  ROUTE_HOME_PAGE,
  ROUTE_LOGIN_PAGE,
  ROUTE_REGISTRATION_PAGE,
  ROUTE_SHOP_PAGE,
} from '../CONST/list-local-routs/list-routes-public';

const HomePage = React.lazy(() => import('../pages/HomePage/HomePage'));
const LoginPage = React.lazy(() => import('../pages/LoginPage/LoginPage'));
const RegistrationPage = React.lazy(() =>
  import('../pages/RegisterPage/RegisterPage')
);

const DetailsGame = React.lazy(() =>
  import('../pages/DetailsGame/DetailsGame')
);
const BestSeriesGames = React.lazy(() =>
  import('../pages/BestSeriesGames/BestSeriesGames')
);

const GamesAllPage = React.lazy(() =>
  import('../pages/GamesAllPage/GamesAllPage')
);

const BlogPage = React.lazy(() => import('../pages/BlogPage/BlogPage'));
const ShopPage = React.lazy(() => import('../pages/ShopPage/ShopPage'));

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
  {
    path: ROUTE_ALL_GAMES.getFullUrl(),
    page: GamesAllPage,
    hideAfterLogin: false,
  },
  {
    path: ROUTE_BLOG.getFullUrl(),
    page: BlogPage,
    hideAfterLogin: false,
  },
];

export const PROTECT_ROUTER = [
  {
    path: ROUTE_BEST_SERIES_GAME.getFullUrl(),
    page: BestSeriesGames,
    hideAfterLogin: false,
  },
  {
    path: ROUTE_DETAILS_PAGE.getFullUrl(),
    page: DetailsGame,
    hideAfterLogin: false,
  },
  {
    path: ROUTE_SHOP_PAGE.getFullUrl(),
    page: ShopPage,
    hideAfterLogin: false,
  },
];
