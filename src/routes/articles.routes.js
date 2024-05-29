const express = require("express");

const {
  getAllArticles,
  create,
  getArticle,
} = require("../controllers/articles.controllers");

const ArticleRouter = express.Router();

ArticleRouter.post("/", create);

ArticleRouter.get("/", getAllArticles);
ArticleRouter.get("/:id", getArticle);

module.exports = ArticleRouter;
