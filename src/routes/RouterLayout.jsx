import React from 'react';
// eslint-disable-next-line no-unused-vars
import { Redirect, Route, Switch } from 'react-router-dom';
import { ROUTE_LOGIN_PAGE } from '../CONST/list-local-routs/list-routes-public';
import Page404 from '../pages/Page404/Page404';
import { PROTECT_ROUTER, PUBLIC_ROUTER } from './indexRouter';
import PrivateRoute from './PrivateRoute';
import { useSelector } from 'react-redux';
import { getIsAuthSelector } from '../selectors/selector-auth-user';

const RouterLayout = () => {
  const isAuth = useSelector(getIsAuthSelector);

  return (
    <>
      <React.Suspense fallback={<span>loading...</span>}>
        <Switch>
          {PUBLIC_ROUTER.map((router, key) => {
            if (router.hideAfterLogin) {
              return null;
            } else {
              return (
                <Route exact={true} path={router.path} key={key}>
                  <router.page />
                </Route>
              );
            }
          })}
          {PROTECT_ROUTER.map((router, key) => {
            return (
              <PrivateRoute
                path={router.path}
                key={key}
                redirectTo={ROUTE_LOGIN_PAGE.path}
                isAuth={isAuth}
                loadingStatus={true}
              >
                <router.page />
              </PrivateRoute>
            );
          })}
          <Route exact={true} path={'*'}>
            <Page404 />
          </Route>
          <Redirect to="/" />
        </Switch>
      </React.Suspense>
    </>
  );
};

export default RouterLayout;
