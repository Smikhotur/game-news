export const getBestSeriesGames = (state) => {
  return state.games.bestSeriesGames;
};

export const getBestSeriesGamesIsLoading = (state) => {
  return state.games.bestSeriesGamesIsLoading;
};

export const getBestSeriesGamesError = (state) => {
  return state.games.bestSeriesGamesError;
};

export const getAllGames = (state) => {
  return state.games.allGames;
};

export const getGameDetails = (state) => {
  return state.games.detailsGame;
};

export const getCommentsSelector = (state) => {
  return state.games.comments;
};
