import { createAsyncThunk } from '@reduxjs/toolkit';
import { API } from '../CONST/api-endpoints';
import { GAMES_TYPES_PREFIX } from '../CONST/types-prefix/types-prefix-games';
import {
  setAllGames,
  setAllGamesPending,
  setBestSeriesGames,
  setBestSeriesGamesFetching,
  setBestSeriesGamesFetchingError,
  setComments,
  setGameDetails,
  setNewComments,
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

export const seriesGameDetails = createAsyncThunk(
  GAMES_TYPES_PREFIX.gameSeriesDetails,
  async (data, { dispatch }) => {
    try {
      dispatch(setAllGamesPending());
      const res = await service.get(`${API.detailsGameSeries}/:${data}`);
      dispatch(setGameDetails(res.data[0]));
      return res.data[0];
    } catch (e) {
      dispatch(settAllGamesError(e));
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
      dispatch(setAllGames(res));
    } catch (e) {
      dispatch(settAllGamesError(e));
      return e.response.data.message;
    }
  }
);

export const gameDetailsAsync = createAsyncThunk(
  GAMES_TYPES_PREFIX.gameDetails,
  async (data, { dispatch }) => {
    try {
      dispatch(setAllGamesPending());
      const res = await getGames(`${API.detailsGame}?id=${data.id}`);
      dispatch(setGameDetails(res));
    } catch (e) {
      dispatch(settAllGamesError(e));
      return e.response.data.message;
    }
  }
);

export const createCommentAsync = createAsyncThunk(
  GAMES_TYPES_PREFIX.createComment,
  async (data, { dispatch }) => {
    try {
      const res = await service.post(API.createComment, data);
      dispatch(setNewComments(res.data));
      return res.data;
    } catch (e) {
      return e.response.data.message;
    }
  }
);

export const getCommentAsync = createAsyncThunk(
  GAMES_TYPES_PREFIX.getComments,
  async (data, { dispatch }) => {
    try {
      const res = await service.get(
        `${API.getComments}/:${data.id_game}/:${data.count}`
      );
      dispatch(setComments(res.data));
      return res.data;
    } catch (e) {
      return e.response.data.message;
    }
  }
);
