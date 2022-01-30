import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getStatusLoadingInAuthSliceSelector } from '../selectors/selectors';
import { HTTP_FULFILLED_STATUS } from '../CONST/http-request-status';
import { getFromStorage } from '../service/local-session-Storage/service-localStorage';
import { ACCESS_TOKEN } from '../CONST/keys-localStorage';
import { ROUTE_LOGIN_PAGE } from '../CONST/list-local-routes/list-routes-public';

const PrivateRoute = ({ path, children, redirectTo, isAuth, ...rest }) => {
  const loadingStatus = useSelector(getStatusLoadingInAuthSliceSelector);
  const accessToken = getFromStorage(ACCESS_TOKEN);

  const renderRouter = () => {
    if (accessToken) {
      if (loadingStatus === HTTP_FULFILLED_STATUS) {
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
