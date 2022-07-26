import axios from "axios";
/*Sweet Alert*/
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';


export const GET_VIDEOGAMES = "GET_VIDEOGAMES";
export const GET_VIDEOGAMES_NAME = "GET_VIDEOGAMES_NAME";
export const GET_VIDEOGAME_DETAIL = "GET_VIDEOGAME_DETAIL";
export const GET_GENRES = "GET_GENRES";
export const CLEAN_GAMES = "CLEAN_GAMES";
export const CURRENT_PAGE = "CURRENT_PAGE";
/* Filters */
export const SORT_BY_NAME_ASC = "SORT_BY_NAME_ASC";
export const SORT_BY_NAME_DES = "SORT_BY_NAME_DES";
export const SORT_BY_RATING_LOWEST = "SORT_BY_RATING_LOWEST";
export const SORT_BY_RATING_HIGHEST = "SORT_BY_RATING_HIGHEST";
export const FILTER_BY_DB = "FILTER_BY_DB";
export const FILTER_BY_API = "FILTER_BY_API";
export const FILTER_BY_ALL = "FILTER_BY_ALL";

export const FILTER_BY_GENRE = "FILTER_BY_GENRE";

const MySwal = withReactContent(Swal);

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

function getVideogamesByName(name){
  return async function (dispatch) {
    try {
      const videogamesName = await axios.get(`http://localhost:3001/videogames?name=${name}`);
      console.log("videogame", videogamesName.data);
      return dispatch({
        type: GET_VIDEOGAMES_NAME,
        payload: videogamesName.data,
      });
      
    } catch (error) {
      console.log(`GetVideogamesByName ${error}`);
    }
  };
}

function cleanGames(){
  return {
    type: CLEAN_GAMES,
    payload: null,
  };
}

function getPage(n){
  return {
    type: CURRENT_PAGE,
    payload: n
  }
}

function getVideogameDetail(id){
  return async function (dispatch) {
    if(id){
      try {
        const gameDetail = await axios.get(`http://localhost:3001/videogame/${id}`);
        return dispatch({
          type: GET_VIDEOGAME_DETAIL,
          payload: gameDetail.data,
        });
      } catch (error) {
        console.log(`GetVideogameDetail ${error}`);
      }
    }
    else{
      dispatch({ type: GET_VIDEOGAME_DETAIL, payload: {} });
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

/*
* Methods for Filters
*/
function orderASC(){
  return {
    type: SORT_BY_NAME_ASC,
    payload: null,
  };
}

function orderDES(){
  return {
    type: SORT_BY_NAME_DES,
    payload: null,
  };
}

function lowestRATING(){
  return {
    type: SORT_BY_RATING_LOWEST,
    payload: null,
  };
}

function highestRATING(){
  return {
    type: SORT_BY_RATING_HIGHEST,
    payload: null,
  };
}

function dataFromDB(){
  return {
    type: FILTER_BY_DB,
    payload: null,
  };
}

function dataFromAPI(){
  return {
    type: FILTER_BY_API,
    payload: null,
  };
}

function dataFromAll(){
  return {
    type: FILTER_BY_ALL,
    payload: null,
  };
}

function filterByGenre(name){
  return {
    type: FILTER_BY_GENRE,
    payload: name,
  };
}



export {
  getAllVideogames,
  getAllGenres,
  getVideogamesByName,
  getVideogameDetail,
  cleanGames,
  getPage,

  orderASC,
  orderDES,
  lowestRATING,
  highestRATING,
  dataFromDB,
  dataFromAPI,
  dataFromAll,
  filterByGenre

};
