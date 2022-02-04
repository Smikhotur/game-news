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
