const express = require("express");

const {
  create,
  getAllJournals,
} = require("../controllers/journals.controllers");

const JournalRouter = express.Router();



JournalRouter.post("/", create);

JournalRouter.get("/", getAllJournals);

module.exports = JournalRouter;
