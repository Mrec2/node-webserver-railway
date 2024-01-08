const express = require("express");
const hbs = require("hbs");
require("dotenv").config();

const app = express();
const port = process.env.PORT;

//handlebars
app.set("view engine", "hbs");
hbs.registerPartials(__dirname + "/views/partials");
// Serve static content
app.use(express.static("./public"));

// app.get("/", (req, res) => {
//   res.send("Home page");
// });

app.get("/", (req, res) => {
  res.render("home", {
    name: "Mario",
    title: "Node course",
  });
});
app.get("/generic", (req, res) => {
  res.render("generic", {
    name: "Mario",
    title: "Node course",
  });
});
app.get("/elements", (req, res) => {
  res.render("elements", {
    name: "Mario",
    title: "Node course",
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
