const axios = require("axios");
const { Videogame, Genre } = require("../db");
const {
  URL_VIDEOGAMES,
  URL_VIDEOGAMES_SEARCH,
  URL_VIDEOGAME_DETAIL,
} = require("./utils/apiAccess");

const { getApiData, getDBData } = require("./utils/getData");
const { API_KEY } = process.env;


/*
? GET ALL VIDEOGAMES FROM API & DB 
*/

const getAllVideogames = async (req, res, next) => {
  const { name } = req.query;

  if (name) {
    try {
      const dataName = await getVideogamesByName(name);
      dataName.length === 0 || !dataName
        ? res.status(404).send(`The Videogame: ${name} doesn't exist`)
        : res.status(200).send(dataName);
    } catch (error) {
      next(error);
    }
  } else {
    try {
      const url = `${URL_VIDEOGAMES}?key=${API_KEY}`;
      await Promise.all([getApiData(url), getDBData()]).then((data) => {
        const [dataApi, dataDB] = data;

        if (!dataDB || dataDB.length === 0) {
          res.status(200).send({ length: dataApi.length, games: dataApi });
        } else if (!dataApi || dataApi.length === 0) {
          res.status(200).send({ length: dataDB.length, games: dataDB });
        } else {
          const allDataGames = [...dataApi, ...dataDB];
          res
            .status(200)
            .send(allDataGames);
        }
      });
    } catch (error) {
      res.status(400).send(`Can't get All Videogames: ${error}`);
    }
  }
};


/*
? GET VIDEOGAMES BY NAME FROM API 
*/

const getVideogamesByName = async (name) => {

  
  const Url = `${URL_VIDEOGAMES_SEARCH}${name}&key=${API_KEY}`;

  try {
    const DbData = await getDBData();
    const dataDBFilter = DbData?.filter((data) =>
      data.name.toLowerCase().includes(name.toLowerCase())
    );
    
    const dataAPIFilter = [];
    const getApiInfo = await axios.get(Url);
    getApiInfo &&
      getApiInfo.data.results?.map((game) => {
        dataAPIFilter.push({
          id: game.id,
          name: game.name,
          released: game.released,
          background_image: game.background_image,
          rating: game.rating,
          genres: game.genres.map((genre) => genre.name),
          platforms: game.platforms.map((platform) => platform.platform.name),
          createdGame: false,
        });
      });

    return [...dataDBFilter, ...dataAPIFilter].slice(0, 15);

  } catch (error) {
    throw "Error searching a videogame by name";
  }
}


/*
? GET VIDEO DETAIL FROM DB OR API 
*/

const getVideogameDetail = async (req, res, next) => {
  const { idVideogame } = req.params;
  if (idVideogame) {
    try {
      const DbData = await getDBData();
      const find = DbData?.find((data) => data.id === idVideogame);
      if (find) {
        res.status(200).send(find);
      } else {
        const Url = `${URL_VIDEOGAME_DETAIL}${idVideogame}?key=${API_KEY}`;
        const findGameAPI = await axios.get(Url);
        //console.log("en api", findGameAPI);
        const Videogame = {
          id: findGameAPI.data.id,
          name: findGameAPI.data.name,
          description: findGameAPI.data.description,
          released: findGameAPI.data.released,
          background_image: findGameAPI.data.background_image,
          rating: findGameAPI.data.rating,
          genres: findGameAPI.data.genres.map((genre) => genre.name),
          platforms: findGameAPI.data.platforms.map(
            (platform) => platform.platform.name
          ),
        };
        res.status(200).send(Videogame);
      }
    } catch (error) {
      res.status(400).send({ error:"The Videogame doesn't exist"});
    }
  }
};

/*
* ADD VIDEOGAME TO DB
*/

const addVideogame = async (req, res, next) => {
  const {
    name,
    background_image,
    description,
    released,
    rating,
    genres,
    platforms,
  } = req.body;

  if (!name || !description || !platforms || !genres) {
    res.status(400).send({ error:"Missing data in the request" });
  }

  try {
    const addGame = await Videogame.create({
      name,
      description,
      released,
      rating,
      platforms,
      background_image:
        background_image || "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/1437b3125118797.61129b5b34f43.jpg",
    });

    const genreDb = await Genre.findAll({
      where: { name: genres },
    });

    await addGame.addGenre(genreDb);
    res.status(200).send(addGame);
  } catch (error) {
    res.status(400).send({ error:`Can't add new videogame ${error}`});
  }
};

module.exports = {
  getAllVideogames,
  getVideogameDetail,
  addVideogame,
};
