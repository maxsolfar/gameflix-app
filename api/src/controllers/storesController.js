const axios = require("axios");

const { Store } = require("../db");
const { URL_VIDEOGAME_STORES } = require("./utils/apiAccess");
const { API_KEY } = process.env;

/*
 * ADD STORES TO DB FROM API
 */

const addStoresToDB = async () => {
  try {
    let stores = [];
    const storesAPI = await axios.get(
      `${URL_VIDEOGAME_STORES}?key=${API_KEY}`
    );

    storesAPI &&
    storesAPI.data.results?.map((store) => {
        stores.push({
          name: store.name,
          domain: store.domain,
        });
      });

    const storesDB = await Store.findAll();

    if (storesDB.length === 0) {
      await Store.bulkCreate(stores);
    }
  } catch (error) {
    throw `Can't add stores to bd: ${error}`;
  }
};

/*
? GET ALL STORES FROM DB
*/

const getStoresDB = async (req, res, next) => {
  try {
    await addStoresToDB();
    let storesDB = await Store.findAll();
    const stores = storesDB?.map((store) => {
      return {
        name: store.name,
        domain: store.domain,
      };
    });
    res.send(stores);
  } catch (error) {
    res.status(400).send(`Can't get Stores from DB: ${error}`);
  }
};

module.exports = {
  addStoresToDB,
  getStoresDB,
};
