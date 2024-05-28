// logic happens here
const Journals = require("../models/journals.model");

const create = async (req, res) => {
  try {
    const newJournal = new Journals(req.body);
    const savedJournal = await newJournal.save();
    res.json(savedJournal);
  } catch (err) {
    res.status(500);
    res.json({ message: "an error occured", err });
  }
};

const getAllJournals = async (req, res) => {
  const allJournals = await Journals.find({});
  res.json({ message: "Journals Found", data: allJournals });
};

module.exports = {
  create,
  getAllJournals,
};
