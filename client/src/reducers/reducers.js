import {
  GET_VIDEOGAMES,
  GET_VIDEOGAMES_NAME,
  GET_VIDEOGAME_DETAIL,
  GET_GENRES,
  CLEAN_GAMES,
  CURRENT_PAGE,
  FILTER_BY_API,
  FILTER_BY_DB,
  FILTER_BY_ALL,
  FILTER_BY_GENRE,
  SORT_BY_NAME_ASC,
  SORT_BY_NAME_DES,
  SORT_BY_RATING_LOWEST,
  SORT_BY_RATING_HIGHEST,
} from "../actions/actions.js";

const initialState = {
  allgames: [],
  games: [],
  gameDetail: {},
  genres: [],
  savedPage: 1,
};

function rootReducer(state = initialState, { type, payload }) {
  switch (type) {
    case GET_VIDEOGAMES:
      return {
        ...state,
        games: payload,
        allgames: payload,
      };

    case GET_VIDEOGAMES_NAME:
      return {
        ...state,
        games: payload,
      };

    case GET_VIDEOGAME_DETAIL:
      return {
        ...state,
        gameDetail: payload,
      };

    case GET_GENRES:
      return {
        ...state,
        genres: payload,
      };
    
    case CLEAN_GAMES:
      return {
        ...state,
        games: []
      }
    
    case CURRENT_PAGE:
      return {
        ...state,
        savedPage: payload
      }
    case SORT_BY_NAME_ASC:
      return {
        ...state,
        games: state.games.sort((a, b) => {
          if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
          if (b.name.toLowerCase() < a.name.toLowerCase()) return 1;
          return 0;
        }),
      };

    case SORT_BY_NAME_DES:
      return {
        ...state,
        games: state.games.sort((a, b) => {
          if (b.name.toLowerCase() < a.name.toLowerCase()) return -1;
          if (a.name.toLowerCase() < b.name.toLowerCase()) return 1;
          return 0;
        }),
      };

    case SORT_BY_RATING_LOWEST:
      return {
        ...state,
        games: state.games.sort((a, b) => {
          if (a.rating < b.rating) return -1;
          if (b.rating < a.rating) return 1;
          return 0;
        }),
      };
    case SORT_BY_RATING_HIGHEST:
      return {
        ...state,
        games: state.games.sort((a, b) => {
          if (b.rating < a.rating) return -1;
          if (a.rating < b.rating) return 1;
          return 0;
        }),
      };

    case FILTER_BY_DB:
      return {
        ...state,
        games: state.allgames.filter((game) => {
          return game.createdGame === true;
        }),
      };
    case FILTER_BY_API:
      return {
        ...state,
        games: state.allgames.filter((game) => {
          return game.createdGame === false;
        }),
      };

    case FILTER_BY_ALL:
      return {
        ...state,
        games: state.allgames,
      };

    case FILTER_BY_GENRE:
      return {
        ...state,
        games: state.games.filter((game)=>{
          
          if(game.createdGame === true){
            let DB = game.genres.map(g => g.name).includes(payload);
            return DB;
          }
          const API = game.genres?.includes(payload);
          return API;
        })
      };

    default:
      return state;
  }
}
;

export default rootReducer;
