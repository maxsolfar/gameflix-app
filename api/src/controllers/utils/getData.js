const axios = require("axios");
const { Videogame, Genre, Platform, Tag, Store } = require("../../db");


const getApiData = async (url) => {
  /*Number of games requested*/
  const nRequest = 100;
  let apiGames = [];
  let currentUrl = url;

  while (apiGames.length < nRequest) {
    const APIData = await axios.get(currentUrl);

    //apiGames = [...apiGames, ...getApiInfo.data.results];
    APIData &&
    APIData.data.results?.map((game) => {
        apiGames.push({
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
    currentUrl = APIData.data.next;
  }
  return apiGames;
};


const getDBData = async () => {
  let DBData = await Videogame.findAll({
    include: [
    {
      model: Genre,
      attributes: ["name"],
      through: {
        attributes: [],
      }, 
    },
    {
      model: Platform,
      attributes: ["name"],
      through: {
        attributes: [],
      },
    },
  ],
  });
  return DBData;
};


const getDBCompleteData = async () => {
  let DBData = await Videogame.findAll({
    include: [
    {
      model: Genre,
      attributes: ["name"],
      through: {
        attributes: [],
      }, 
    },
    {
      model: Platform,
      attributes: ["name"],
      through: {
        attributes: [],
      },
    },
    {
      model: Store,
      attributes: ["name", "domain"],
      through: {
        attributes: [],
      },
    },
    {
      model: Tag,
      attributes: ["name"],
      through: {
        attributes: [],
      },
    },
  ],
  });
  return DBData;
};


module.exports = {
  getApiData,
  getDBData,
  getDBCompleteData
};

