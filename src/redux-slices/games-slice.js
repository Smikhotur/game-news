import { createSlice } from '@reduxjs/toolkit';

export const gamesSlice = createSlice({
  name: 'games',
  initialState: {
    bestSeriesGames: [],
    bestSeriesGamesIsLoading: false,
    bestSeriesGamesError: {},
    allGames: [],
    detailsGame: {},
    comments: [],
  },
  reducers: {
    setBestSeriesGames: (state, action) => {
      state.bestSeriesGames = action.payload;
      state.bestSeriesGamesIsLoading = false;
    },
    setBestSeriesGamesFetching: (state) => {
      state.bestSeriesGamesIsLoading = true;
    },
    setBestSeriesGamesFetchingError: (state, action) => {
      state.bestSeriesGamesIsLoading = false;
      state.bestSeriesGamesError = action.payload;
    },
    setAllGames: (state, action) => {
      state.allGames = action.payload;
      state.bestSeriesGamesIsLoading = false;
    },
    setAllGamesPending: (state) => {
      state.bestSeriesGamesIsLoading = true;
    },
    settAllGamesError: (state, action) => {
      state.bestSeriesGamesIsLoading = false;
      state.bestSeriesGamesError = action.payload;
    },
    setGameDetails: (state, action) => {
      state.bestSeriesGamesIsLoading = false;
      state.detailsGame = action.payload;
    },
    setNewComments: (state, action) => {
      state.comments.unshift(action.payload);
    },
    setComments: (state, action) => {
      state.comments = action.payload;
    },
  },
});

export const {
  setBestSeriesGames,
  setBestSeriesGamesFetching,
  setBestSeriesGamesFetchingError,
  setAllGames,
  setAllGamesPending,
  settAllGamesError,
  setGameDetails,
  setNewComments,
  setComments,
} = gamesSlice.actions;
export default gamesSlice.reducer;
