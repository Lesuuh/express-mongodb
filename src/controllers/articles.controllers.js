const Articles = require("../models/articles.model");

// post
const create = async (req, res) => {
  const newArticle = new Articles(req.body);
  const savedArticle = await newArticle;
  res.json(savedArticle);
};

// get
const getAllArticles = async (req, res) => {
  const allArticles = await Articles.find({});
  res.json({ message: "Articles Found", data: allArticles });
};

module.exports = {
  create,
  getAllArticles,
};
