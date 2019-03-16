const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const { Pool } = require("pg");
const connectionString = process.env.DATABASE_URL;

const pool = new Pool({connectionString: connectionString});
app.set("views", "views");
app.set("view engine", "ejs");
app.use(express.static("public"));

app.listen(port, function() {
    console.log(`Listening on port: ${port}`);
});

app.get("loginUser",handleLogin);


function handleLogin(request, response) {
   const fname = request.query.fname;
   const lname = request.query.lname;
   const key = request.query.key;
   var params = '{"fname": fname, "lname": lname, "key":key}';

   checkDBuser(params, function(errr, result){

   });
}

function checkDBuser(params, callback) {
 const sql = "SELECT id, fname, lname FROM people where id = $1::int";
 const reqObj = JSON.parse(params);
 console.log(reqObj);
}