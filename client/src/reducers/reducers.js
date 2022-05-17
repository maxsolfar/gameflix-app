import {
  GET_VIDEOGAMES,
  GET_VIDEOGAMES_NAME,
  GET_VIDEOGAME_DETAIL,
  GET_GENRES,
  FILTER_BY_API,
  FILTER_BY_DB,
  FILTER_BY_GENRE,
  SORT_BY_NAME,
  SORT_BY_RATING,
} from "../actions/actions.js";

const initialState = {
  games: [],
  gameDetail: {},
  genres: [],
};

function rootReducer(state = initialState, { type, payload }) {
  switch (type) {
    case GET_VIDEOGAMES:
      return {
        ...state,
        games: payload,
      };

    case GET_VIDEOGAMES_NAME:
      return {
        ...state,
        games: payload,
      };

    case GET_GENRES:
      return {
        ...state,
        genres: payload,
      };
    default:
      return state;
  }
}

export default rootReducer;
