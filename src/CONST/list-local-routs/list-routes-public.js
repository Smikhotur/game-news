import { formatterConcatPath } from '../../formatters/formatter-local-router';

export const ROUTE_HOME_PAGE = {
  path: '/',
  params: [],
  getFullUrl: formatterConcatPath,
};

export const ROUTE_LOGIN_PAGE = {
  path: '/login',
  params: [],
  getFullUrl: formatterConcatPath,
};

export const ROUTE_REGISTRATION_PAGE = {
  path: '/registration',
  params: [],
  getFullUrl: formatterConcatPath,
};

export const ROUTE_DETAILS_PAGE = {
  path: '/details-game',
  params: ['id'],
  getFullUrl: formatterConcatPath,
};

export const ROUTE_BEST_SERIES_GAME = {
  path: '/best-series-game',
  params: ['nameGame'],
  getFullUrl: formatterConcatPath,
};

export const ROUTE_ALL_GAMES = {
  path: '/all-games',
  params: [],
  getFullUrl: formatterConcatPath,
};

export const ROUTE_BLOG = {
  path: '/blog',
  params: [],
  getFullUrl: formatterConcatPath,
};

export const ROUTE_SHOP_PAGE = {
  path: '/shop',
  params: [],
  getFullUrl: formatterConcatPath,
};

export const ROUTE_MESSENGER = {
  path: '/messenger',
  params: ['receiverId?'],
  getFullUrl: formatterConcatPath,
};

export const ROUTE_MY_PROFILE = {
  path: '/my-profile',
  params: ['id?'],
  getFullUrl: formatterConcatPath,
};

export const ROUTE_PAGE_404 = {
  path: '/404',
  params: [],
  getFullUrl: formatterConcatPath,
};
