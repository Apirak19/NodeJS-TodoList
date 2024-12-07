const mongoose = require("mongoose");

const PersonsSchema = new mongoose.Schema({
  name: { type: String, required: true },
  active: { type: Boolean },
});

const Person = mongoose.model("persons", PersonsSchema);

module.exports = Person;
