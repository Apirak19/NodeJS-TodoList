const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const authRoutes = require("./routes/auth");
require("dotenv").config();

const app = express();

app.use(bodyParser.json());

app.use("/auth", authRoutes);

// Set up EJS as the view engine
app.set("view engine", "ejs");

// Connect to MongoDB
mongoose
  .connect("mongodb://localhost:27017/NodeJs-TodoList")
  .then(() => console.log("success"))
  .catch((err) => console.error(err));

// Define Person class
class Person {
  constructor(personName, personFirstname, personLastname) {
    this.name = personName;
    this.firstName = personFirstname;
    this.lastName = personLastname;
  }
}

const personSchema = new mongoose.Schema({
  name: { type: String, required: true },
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
});

const todoSchema = new mongoose.Schema({
  name: { type: String, required: true },
  is_done: { type: Boolean, required: true },
});

const PersonModel = mongoose.model("persons", personSchema);
const TodoModel = mongoose.model("todos", todoSchema);

// Example usage of Person
// const newProgrammer = new Person("Apirak", 27, "BA");
// console.log(newProgrammer);

// GET route
app.get("/", (req, res) => {
  res.render("app");
});

app.get("/my-todo", (req, res) => {
  res.render("myTodo");
});

app.get("/persons", async (req, res) => {
  try {
    const persons = await PersonModel.find();
    const newPersons = persons.map(
      (person) => new Person(person.name, person.first_name, person.last_name)
    );
    console.log("new persons: ", newPersons);
    res.render("persons", { newPersons });
  } catch {}
});

// POST route
app.post("/create-person", async (req, res) => {
  const personData = req.body;
  console.log(personData);

  const newPerson = await PersonModel.create({
    name: personData.name,
    first_name: personData.first_name,
    last_name: personData.last_name,
  });
  console.log("created: ", newPerson); // Log the request body
  res.send("input: " + JSON.stringify(newPerson)); // Send back the input
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`server running on port ${port}`);
});
