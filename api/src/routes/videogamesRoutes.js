const { Router } = require("express");

const videogamesRouter = Router();

const { getAllVideogames } = require("../controllers/videogamesController");


videogamesRouter.get("/", getAllVideogames);

module.exports = videogamesRouter;