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

app.get("/loginUser",handleLogin);


function handleLogin(request, response) {
   const fname = request.query.fname;
   const lname = request.query.lname;
   const key = request.query.key;
   var params = '{"fname": fname, "lname": lname, "key":key}';

   checkDBuser(fname, function(errr, result){
     
     const context = result[0];
     response.render("logedIN",JSON.stringify(context));
  //   response.render("logedIN",context);
   });
}

function checkDBuser(params, callback) {
 const sql = "SELECT id, fname, lname FROM people where fname = $1";
 const data = [params];
 pool.query(sql, data, function(err, result) {
    // If an error occurred...
    if (err) {
        console.log("Error in query: ")
        console.log(err);
        callback(err, null);
    }

    // Log this to the console for debugging purposes.
    console.log("Found result: " + JSON.stringify(result.rows));


    // When someone else called this function, they supplied the function
    // they wanted called when we were all done. Call that function now
    // and pass it the results.

    // (The first parameter is the error variable, so we will pass null.)
    callback(null, result.rows);
});

 console.log(params);
}