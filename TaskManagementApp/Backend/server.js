const express = require("express");
const bodyParser = require("body-parser");
const dbconnect = require("./config/dbconfig");
const cors = require("cors");

require("dotenv").config();
const port = process.env.PORT || 3000;

const app = express();

//Middleware
app.use(bodyParser.json());
app.use(cors());

//DB Connection
dbconnect();

//TestRoutes
app.get("/", (req, res) => {
  res.send("Task Manager API is running");
});

//Server
app.listen(port, () => {
  console.log(`The server is running in the Port : ${port}`);
});
