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
  params: [],
  getFullUrl: formatterConcatPath,
};

export const ROUTE_BEST_SERIES_GAME = {
  path: '/best-series-game',
  params: ['nameGame'],
  getFullUrl: formatterConcatPath,
};
