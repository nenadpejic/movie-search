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
    default:
      return state;
  }
}

export const initialState = {
  movies: [],
  isLoading: false,
  isError: false,
  errMsg: "",
};
