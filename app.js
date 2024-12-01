const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

// Connect to MongoDB
mongoose
  .connect("mongodb://localhost:27017/NodeJs-TodoList")
  .then(() => console.log("success"))
  .catch((err) => console.error(err));

// Define Person class
class Person {
  constructor(personName, personAge, personPosition) {
    this.personName = personName;
    this.personAge = personAge;
    this.personPosition = personPosition;
  }
}

// Example usage of Person
const newProgrammer = new Person("Apirak", 27, "BA");
console.log(newProgrammer);

// Set up EJS as the view engine
app.set("view engine", "ejs");

// GET route
app.get("/", (req, res) => {
  const newBA = new Person("Wu", 26, "programmer");
  res.render("app", { newBA });
});

// POST route
app.post("/createPerson", (req, res) => {
  console.log("created: ", req.body); // Log the request body
  res.send("input: " + JSON.stringify(req.body)); // Send back the input
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`server running on port ${port}`);
});

// Log current time
console.log(`hello world at ${new Date()}`);
