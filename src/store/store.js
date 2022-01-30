import { configureStore } from '@reduxjs/toolkit';
// import { errorMiddleware } from '../middleware/error-middleware';
// import { loadingMiddleware } from '../middleware/loading-middleware';

export const store = configureStore({
  reducer: {},
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware().concat(errorMiddleware, loadingMiddleware),
});
