import { HTTP_REQUEST_STATUS } from '../CONST/http-request-status';
import {
  setAsyncActionsInState,
  removeAsyncActionsFromState,
} from '../redux-slices/loading-slice';

export const loadingMiddleware = (api) => (next) => (action) => {
  if (action?.meta?.requestStatus === HTTP_REQUEST_STATUS.PENDING) {
    api.dispatch(
      setAsyncActionsInState({
        requestId: action.meta.requestId,
        typePrefix: action.type.match(/^.+(?=\/)/)[0],
      })
    );
  }

  if (action?.meta?.requestStatus === HTTP_REQUEST_STATUS.FULFILLED) {
    api.dispatch(
      removeAsyncActionsFromState({ requestId: action.meta.requestId })
    );
  }

  if (action?.meta?.requestStatus === HTTP_REQUEST_STATUS.REJECTED) {
    api.dispatch(
      removeAsyncActionsFromState({ requestId: action.meta.requestId })
    );
  }
  return next(action);
};
