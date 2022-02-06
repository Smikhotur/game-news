import { configureStore } from '@reduxjs/toolkit';
// import { errorMiddleware } from '../middleware/error-middleware';
// import { loadingMiddleware } from '../middleware/loading-middleware';
import AuthReducer from '../redux-slices/auth-slice';
import MessageReducer from '../redux-slices/message-slice';

export const store = configureStore({
  reducer: {
    auth: AuthReducer,
    message: MessageReducer,
  },
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware().concat(errorMiddleware, loadingMiddleware),
});
