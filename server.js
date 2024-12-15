const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/auth");
const bodyParser = require("body-parser");
require("dotenv").config();

const app = express();

app.use(express.json());
app.use(bodyParser.json());

app.use("/auth", router);

// Set up EJS as the view engine
app.set("view engine", "ejs");

// Connect to MongoDB
mongoose
  .connect("mongodb://localhost:27017/NodeJs-TodoList")
  .then(() => console.log("success"))
  .catch((err) => console.error(err));

// GET route
app.get("/", (req, res) => {
  res.render("app");
});

app.get("/my-todo", (req, res) => {
  res.render("myTodo");
});

// POST route
app.post("/create-person", async (req, res) => {
  const personData = req.body;
  console.log(personData);

  console.log("created: ", newPerson); // Log the request body
  res.send("input: " + JSON.stringify(newPerson)); // Send back the input
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`server running on port ${port}`);
});
