const axios = require("axios");

const { Genre } = require("../db");
const { URL_VIDEOGAME_GENRES } = require("./utils/apiAccess");
const { API_KEY } = process.env;


/*
* ADD GENRES TO DB FROM API
*/

const addGenresToDB = async () => {
  try {
    let genres = [];
    const genresAPI = await axios.get(`${URL_VIDEOGAME_GENRES}?key=${API_KEY}`);

    genresAPI &&
    genresAPI.data.results?.map((genre) => {
        genres.push({
          name: genre.name,
        });
      });

      const genresDB = await Genre.findAll();
      
      if (genresDB.length === 0) {
        await Genre.bulkCreate(genres);
      }
      
  } catch (error) {
    throw `Can't add genres to bd: ${error}`;
  }
};


/*
? GET ALL GENRES FROM DB
*/

const getGenresDB = async (req, res, next) => {
  try {
    await addGenresToDB();
    let genresDB = await Genre.findAll();
    const genres = genresDB?.map(genre => {
      return {
          name: genre.name,
      }
    });
    res.send(genres);
  } catch (error) {
    res.status(400).send(`Can't get Genres from DB: ${error}`);
  }
};



module.exports = {
  addGenresToDB,
  getGenresDB
};
