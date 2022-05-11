const { Router } = require("express");

const genresRouter = Router();

const { getGenresDB } = require("../controllers/genresController");


genresRouter.get("/", getGenresDB);


module.exports = genresRouter;