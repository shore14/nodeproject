const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

app.set("views", "views");
app.set("view engine", "ejs");
app.use(express.static("public"));

app.listen(port, function() {
    console.log(`Listening on port: ${port}`);
});