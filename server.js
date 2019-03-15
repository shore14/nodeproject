const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
//const controllers = require("./controllers/thingController.js");
app.use(epxress.static("public"));
//app.use(express.json());