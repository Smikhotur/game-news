import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { ROUTE_LOGIN_PAGE } from '../CONST/list-local-routs/list-routes-public';
// import { useSelector } from 'react-redux';
// import { getStatusLoadingInAuthSliceSelector } from '../selectors/selectors';
// import { HTTP_FULFILLED_STATUS } from '../CONST/http-request-status';
// import { getFromStorage } from '../service/local-session-Storage/service-localStorage';
// import { ACCESS_TOKEN } from '../CONST/keys-localStorage';
// import { ROUTE_LOGIN_PAGE } from '../CONST/list-local-routes/list-routes-public';

const PrivateRoute = ({ path, children, redirectTo, isAuth, ...rest }) => {
  const loadingStatus = true;
  const accessToken = true;

  console.log('hello');

  const renderRouter = () => {
    if (accessToken) {
      if (loadingStatus) {
        return (
          <>
            <Route
              exact={true}
              path={path}
              {...rest}
              render={() => (isAuth ? children : <Redirect to={redirectTo} />)}
            />
          </>
        );
      }
    } else {
      return <Redirect to={ROUTE_LOGIN_PAGE.path} />;
    }
  };
  return <>{renderRouter()}</>;
};
export default PrivateRoute;
