import axios from "axios";

export const GET_VIDEOGAMES = "GET_VIDEOGAMES";
export const GET_VIDEOGAMES_NAME = "GET_VIDEOGAMES_NAME";
export const GET_VIDEOGAME_DETAIL = "GET_VIDEOGAME_DETAIL";
export const GET_GENRES = "GET_GENRES";
export const FILTER_BY_GENRE = "FILTER_BY_GENRE";
export const FILTER_BY_DB = "FILTER_BY_DB";
export const FILTER_BY_API = "FILTER_BY_API";
export const SORT_BY_NAME = "SORT_BY_NAME";
export const SORT_BY_RATING = "SORT_BY_RATING";

function getAllVideogames() {
  return async function (dispatch) {
    try {
      const allVideogames = await axios.get("http://localhost:3001/videogames");
      return dispatch({
        type: GET_VIDEOGAMES,
        payload: allVideogames.data,
      });
    } catch (error) {
      console.log(`GetAllVideogames ${error}`);
    }
  };
}

function getAllGenres(){
  return async function (dispatch) {
    try {
      const allGenres = await axios.get("http://localhost:3001/genres");
      return dispatch({
        type: GET_GENRES,
        payload: allGenres.data,
      });
    } catch (error) {
      console.log(`GetAllGenres ${error}`);
    }
  };
}

export { getAllVideogames, getAllGenres };
