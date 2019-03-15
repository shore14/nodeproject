const express = require("express");
const app = express();
const controllers = require("./controllers/thingController.js");
app.use(epxress.static("public"));
app.use(express.json());
