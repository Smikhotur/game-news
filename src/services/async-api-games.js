import { createAsyncThunk } from '@reduxjs/toolkit';
import { API } from '../CONST/api-endpoints';
import { GAMES_TYPES_PREFIX } from '../CONST/types-prefix/types-prefix-games';
import {
  setAllGames,
  setAllGamesPending,
  setBestSeriesGames,
  setBestSeriesGamesFetching,
  setBestSeriesGamesFetchingError,
  settAllGamesError,
} from '../redux-slices/games-slice';
import { getGames } from './another-service';
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

export const allGamesAsync = createAsyncThunk(
  GAMES_TYPES_PREFIX.anotherGames,
  async (data, { dispatch }) => {
    try {
      dispatch(setAllGamesPending());
      const res = await getGames(`${API.allGames}`);
      console.log(res);
      dispatch(setAllGames(res));
    } catch (e) {
      dispatch(settAllGamesError(e));
      return e.response.data.message;
    }
  }
);
