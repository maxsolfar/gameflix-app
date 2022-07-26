const { Router } = require("express");

const platformsRouter = Router();

const { getPlatformsDB } = require("../controllers/platformsController");


platformsRouter.get("/", getPlatformsDB);


module.exports = platformsRouter;