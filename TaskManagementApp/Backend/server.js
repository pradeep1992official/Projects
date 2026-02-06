const express = require("express");
const bodyParser = require("body-parser");
const dbconnect = require("./config/dbconfig");
const cors = require("cors");
const authRoutes = require("./router/auth");
const taskRoutes = require("./router/task");

require("dotenv").config();
const port = process.env.PORT || 3000;

const app = express();

//Middleware
app.use(bodyParser.json());
app.use(cors());

//DB Connection
dbconnect();

//TestRoutes
app.use("/api/auth", authRoutes);
app.use("/api/tasks", taskRoutes);

//Server
app.listen(port, () => {
  console.log(`The server is running in the Port : ${port}`);
});
