import { configureStore } from '@reduxjs/toolkit';
import { errorMiddleware } from '../middleware/error-middleware';
import { loadingMiddleware } from '../middleware/loading-middleware';
import AuthReducer from '../redux-slices/auth-slice';
import MessageReducer from '../redux-slices/message-slice';
import GamesReducer from '../redux-slices/games-slice';
import globalErrorSlice from '../redux-slices/global-error-slice';
import LoadingSlice from '../redux-slices/loading-slice';
import ManagementUiReducere from '../redux-slices/management-ui-slice';
import MessengerReducere from '../redux-slices/messenger-slice';

export const store = configureStore({
  reducer: {
    auth: AuthReducer,
    message: MessageReducer,
    games: GamesReducer,
    globalError: globalErrorSlice,
    loading: LoadingSlice,
    management: ManagementUiReducere,
    messenger: MessengerReducere,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(errorMiddleware, loadingMiddleware),
});
