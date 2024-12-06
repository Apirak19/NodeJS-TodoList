const mongoose = require("mongoose");

const PersonsSchema = new mongoose.Schema({
  name: { type: String, required: true },
  active: { type: Boolean },
});
