export const initialState = {
  movies: [],
  isLoading: false,
  errMsg: "",
  isAdvancedSearch: false,
  isMovieDetails: false,
  movieData: null,
};

export function reducer(state, action) {
  switch (action.type) {
    case "SEARCH_LOADING":
      return {
        movies: [],
        isLoading: true,
        errMsg: "",
      };
    case "SEARCH_SUCCESS":
      return {
        movies: action.payload.movies,
        isLoading: false,
        errMsg: "",
      };
    case "SEARCH_ERR":
      return {
        movies: [],
        isLoading: false,
        errMsg: action.payload.errMsg,
      };
    case "ADVANCED_SEARCH":
      return {
        isAdvancedSearch: !state.isAdvancedSearch,
      };
    case "MOVIE_DETAILS":
      return {
        isMovieDetails: !state.isMovieDetails,
        movieData: action.payload.movieData,
      };
    default:
      return state;
  }
}
