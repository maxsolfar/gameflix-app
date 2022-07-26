const { Router } = require("express");

const storesRouter = Router();

const { getStoresDB } = require("../controllers/storesController");


storesRouter.get("/", getStoresDB);


module.exports = storesRouter;