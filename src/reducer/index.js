export const initialState = {
  movies: [],
  isLoading: false,
  isError: false,
  errMsg: "",
  advancedSearch: false,
  movieDetails: false,
  movieData: null,
};

export function reducer(state, action) {
  switch (action.type) {
    case "SEARCH_LOADING":
      return {
        movies: [],
        isLoading: true,
        isError: false,
        errMsg: "",
      };
    case "SEARCH_SUCCESS":
      return {
        movies: action.payload.movies,
        isLoading: false,
        isError: false,
        errMsg: "",
      };
    case "SEARCH_ERR":
      return {
        movies: [],
        isLoading: false,
        isError: true,
        errMsg: action.payload.errMsg,
      };
    case "ADVANCED_SEARCH":
      return {
        advancedSearch: !state.advancedSearch,
      };
    case "MOVIE_DETAILS":
      return {
        movieDetails: !state.movieDetails,
        movieData: action.payload.movieData,
      };
    default:
      return state;
  }
}
