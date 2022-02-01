import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
// import Page404 from '../components/Page404/Page404';
import { PUBLIC_ROUTER } from './indexRouter';
// import PrivateRoute from './PrivateRoute';

const RouterLayout = () => {
  return (
    <>
      <React.Suspense fallback={<span>loading...</span>}>
        <Switch>
          {PUBLIC_ROUTER.map((router, key) => {
            if (router.hideAfterLogin) {
              return null;
            } else {
              console.log(router);
              return (
                <Route exact={true} path={router.path} key={key}>
                  <router.page />
                </Route>
              );
            }
          })}
          {/* {PROTECT_ROUTER.map((router, key) => {
            return (
              <PrivateRoute
                path={router.path}
                key={key}
                redirectTo={ROUTE_LOGIN_PAGE.path}
                isAuth={isAuth}
                loadingStatus={loadingStatus}
              >
                <router.page />
              </PrivateRoute>
            );
          })} */}
          {/* <Route exact={true} path={'*'}>
            <Page404 />
          </Route> */}
          <Redirect to="/" />
        </Switch>
      </React.Suspense>
    </>
  );
};

export default RouterLayout;
