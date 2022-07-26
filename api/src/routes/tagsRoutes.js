const { Router } = require("express");

const tagsRouter = Router();

const { getTagsDB } = require("../controllers/tagController");


tagsRouter.get("/", getTagsDB);


module.exports = tagsRouter;