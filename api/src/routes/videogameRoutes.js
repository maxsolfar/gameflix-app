const { Router } = require("express");

const { getVideogameDetail, addVideogame  } = require("../controllers/videogamesController");

const videogameRouter = Router();

videogameRouter.get("/:idVideogame", getVideogameDetail);
videogameRouter.post("/", addVideogame);

module.exports = videogameRouter;