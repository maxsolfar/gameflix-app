const axios = require("axios");

const { Platform } = require("../db");
const { URL_VIDEOGAME_PLATFORMS } = require("./utils/apiAccess");
const { API_KEY } = process.env;

/*
 * ADD PLATFORMS TO DB FROM API
 */

const addPlatformsToDB = async () => {
  try {
    let platforms = [];
    const platformsAPI = await axios.get(
      `${URL_VIDEOGAME_PLATFORMS}?key=${API_KEY}`
    );

    platformsAPI &&
      platformsAPI.data.results?.map((platform) => {
        platforms.push({
          name: platform.name,
        });
      });

    const platformsDB = await Platform.findAll();

    if (platformsDB.length === 0) {
      await Platform.bulkCreate(platforms);
    }
  } catch (error) {
    throw `Can't add platforms to bd: ${error}`;
  }
};

/*
? GET ALL PLATFORMS FROM DB
*/

const getPlatformsDB = async (req, res, next) => {
  try {
    await addPlatformsToDB();
    let platformsDB = await Platform.findAll();
    const platforms = platformsDB?.map((platform) => {
      return {
        name: platform.name,
      };
    });
    res.send(platforms);
  } catch (error) {
    res.status(400).send(`Can't get Platforms from DB: ${error}`);
  }
};

module.exports = {
  addPlatformsToDB,
  getPlatformsDB,
};
