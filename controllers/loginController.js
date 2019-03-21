const lgmodel = require("../model/loginModel.js");


function handleLogin(request, response) {
   const fname = request.query.fname;
   const lname = request.query.lname;
   const key = request.query.key;
   var params = '{"fname": fname, "lname": lname, "key":key}';
   const data = [fname,lname,key];

   lgmodel.checkDBuser(data, function(err, result){

      const context = result[0];
    //  response.json(context);
    // if(context){
      response.render("logedIN", context);
    // }
    // else

   });

}

function handleSingup(req, res){
    const fname = req.query.fname;
    const lname = req.query.lname;
    const key = req.query.key;
    const data = [fname,lname,key];
    lgmodel.handleSingup(data, function(err, result){
        // response.writeHead(302, {'Location' : '../login.html'});
        // response.end();
        console.log(results[0] + "id returned");
        if(results[0]) {
          res.redirect("../login.html");
        }
    })
}

module.exports = {
    handleLogin: handleLogin
    ,handleSingup: handleSingup
}