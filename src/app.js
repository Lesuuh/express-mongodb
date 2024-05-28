const express = require("express");



const BooksRouter = require("./routes/books.routes");
const JournalRouter = require("./routes/journals.routes");
const ArticleRouter = require("./routes/articles.routes")
const app = express();

// MIDDLEWARES
app.use(express.json());

// Routes
// books route
app.use("/books", BooksRouter);

// journals route
app.use("/journals", JournalRouter);

// articles route
app.use("/articles", ArticleRouter)

module.exports = app;
