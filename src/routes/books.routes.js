const express = require("express");

const BooksRouter = express.Router();

const BooksController = require("../controllers/books.controllers");

BooksRouter.post("/", BooksController.create);

BooksRouter.get("/", BooksController.getAllBooks);

BooksRouter.get("/:id", BooksController.getById);

module.exports = BooksRouter;
