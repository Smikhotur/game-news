import { createAsyncThunk } from '@reduxjs/toolkit';
import { API } from '../CONST/api-endpoints';
import { GAMES_TYPES_PREFIX } from '../CONST/types-prefix/types-prefix-games';
import {
  setBestSeriesGames,
  setBestSeriesGamesFetching,
  setBestSeriesGamesFetchingError,
} from '../redux-slices/games-slice';
import service from './service';

export const seriesGames = createAsyncThunk(
  GAMES_TYPES_PREFIX.bestSeriesGames,
  async (data, { dispatch }) => {
    try {
      dispatch(setBestSeriesGamesFetching());
      const res = await service.get(`${API.bestSeriesGames}/:${data}`);
      dispatch(setBestSeriesGames(res.data));
      return res.data;
    } catch (e) {
      dispatch(setBestSeriesGamesFetchingError(e));
      return e.response.data.message;
    }
  }
);
