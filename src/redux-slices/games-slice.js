import { createSlice } from '@reduxjs/toolkit';

export const gamesSlice = createSlice({
  name: 'games',
  initialState: {
    bestSeriesGames: [],
    bestSeriesGamesIsLoading: false,
    bestSeriesGamesError: {},
    allGames: [],
  },
  reducers: {
    setBestSeriesGames: (state, action) => {
      state.bestSeriesGames = action.payload;
      state.bestSeriesGamesIsLoading = false;
    },
    setBestSeriesGamesFetching: (state) => {
      console.log('hello from fetching');
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
  },
});

export const {
  setBestSeriesGames,
  setBestSeriesGamesFetching,
  setBestSeriesGamesFetchingError,
  setAllGames,
  setAllGamesPending,
  settAllGamesError,
} = gamesSlice.actions;
export default gamesSlice.reducer;
