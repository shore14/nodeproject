const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

//for querying
const { Pool } = require("pg");
const connectionString = process.env.DATABASE_URL;
const pool = new Pool({connectionString: connectionString});
//for handles
const lgcontroller = require("./controllers/loginController.js");
const fcontroller = require("./controllers/feedController.js")

//set up post parser
const bodyParser = require('body-parser')
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 
app.use(express.json());       // to support JSON-encoded bodies
app.use(express.urlencoded()); 


//set up directories
app.set("views", "views");
app.set("view engine", "ejs");
app.use(express.static("public"));
//set up port connection
app.listen(port, function() {
    console.log(`Listening on port: ${port}`);
});

//set up handles
app.get("/loginUser",lgcontroller.handleLogin);
app.post("/signUp", lgcontroller.handleSignup);
app.get("/startFeed", fcontroller.handleStartFeed);