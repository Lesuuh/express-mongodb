const express = require("express");

const {
  getAllArticles,
  create,
} = require("../controllers/articles.controllers");

const ArticleRouter = express.Router();

ArticleRouter.get("/", getAllArticles);

ArticleRouter.post("/", create);

module.exports = ArticleRouter;
