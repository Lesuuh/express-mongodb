const Books = require("../models/books.model");

async function create(req, res) {
  const newBook = new Books(req.body);
  const savedBook = await newBook.save();
  res.json(savedBook);
}

async function getAllBooks(req, res) {
  const allBooks = await Books.find({});
  res.json({ message: "Books Found", data: allBooks });
}

async function getById(req, res) {
  const book = await Books.findById(req.params.id);
  res.json({ message: "Book Found", data: book });
}

module.exports = {
  create,
  getAllBooks,
  getById,
};
