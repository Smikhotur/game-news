// import { isRejectedWithValue } from '@reduxjs/toolkit';
// import {
//   setServerError,
//   setBadRequestError,
//   setAnyError,
//   setValidationServerError,
//   setUnauthorizedError,
// } from '../redux-slices/global-error-slice';
// import { rememberPathAfterLogout, signOut } from '../redux-slices/auth-slice';

// export const errorMiddleware = (api) => (next) => (action) => {
//   if (isRejectedWithValue(action)) {
//     const { status, info } = action.payload;
//     switch (true) {
//       case status === 500: {
//         api.dispatch(setServerError(action.payload));
//         break;
//       }
//       case status === 400 && info.errors instanceof Array: {
//         api.dispatch(setValidationServerError(info));
//         break;
//       }
//       case status === 400: {
//         api.dispatch(setBadRequestError(info));
//         break;
//       }
//       case status === 401: {
//         api.dispatch(rememberPathAfterLogout({ unauthorised: true }));
//         api.dispatch(signOut());
//         api.dispatch(setUnauthorizedError());
//         break;
//       }
//       default: {
//         api.dispatch(setAnyError(info));
//       }
//     }
//   }
//   return next(action);
// };
