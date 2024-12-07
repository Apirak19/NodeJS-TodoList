const mongoose = require("mongoose");

const TodoSchema = new mongoose.Schema({
  name: { type: String, required: true },
  detail: { type: String, required: false },
  isCheck: { type: Boolean },
});

const Todo = mongoose.model("todos", TodoSchema);

module.exports = Todo;
