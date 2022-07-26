const axios = require("axios");

const { Tag } = require("../db");
const { URL_VIDEOGAME_TAGS } = require("./utils/apiAccess");
const { API_KEY } = process.env;

/*
 * ADD TAGS TO DB FROM API
 */

const addTagsToDB = async () => {
  const nTags = 100;
  const url = `${URL_VIDEOGAME_TAGS}?key=${API_KEY}&page_size=30`;
  let tags = [];
  let currentUrl = url;

  try {

  while(tags.length < nTags) {
  
      const tagsAPI = await axios.get(currentUrl);

      tagsAPI &&
        tagsAPI.data.results?.map((tag) => {
          tags.push({
            name: tag.name,
            domain: tag.domain,
            image_background: tag.image_background,
          });
        });

      currentUrl = tagsAPI.data.next;
    }

    const tagsDB = await Tag.findAll();

    if (tagsDB.length === 0) {
      await Tag.bulkCreate(tags);
    }
    
  }
  catch (error) {
    throw `Can't add tags to bd: ${error}`;
  }
};

/*
? GET ALL TAGS FROM DB
*/

const getTagsDB = async (req, res, next) => {
  try {
    await addTagsToDB();
    let tagsDB = await Tag.findAll();
    const tags = tagsDB?.map((tag) => {
      return {
        name: tag.name,
        image_background: tag.image_background,
      };
    });
    res.send(tags);
  } catch (error) {
    res.status(400).send(`Can't get Tags from DB: ${error}`);
  }
};

module.exports = {
  addTagsToDB,
  getTagsDB,
};
