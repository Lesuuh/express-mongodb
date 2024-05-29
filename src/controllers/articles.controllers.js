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

const getArticle = async (req, res)=> {
  const article = Articles.find(req.params.id)
  res.json({message: "Article Found", data : article})
}

module.exports = {
  create,
  getAllArticles,
  getArticle
};

