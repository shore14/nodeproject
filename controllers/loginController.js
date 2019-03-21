const lgmodel = require("../model/loginModel.js");


function handleLogin(request, response) {
   const fname = request.query.fname;
   const lname = request.query.lname;
   const key = request.query.key;
   var params = '{"fname": fname, "lname": lname, "key":key}';
   const data = [fname,lname];

   lgmodel.checkDBuser(data, function(err, result){

      const context = result[0];
     response.json(context);
   });
//    checkDBuser(fname, function(errr, result){
     
//      const context = result[0];
   //  response.render("logedIN",JSON.parse(context));
  //   response.render("logedIN",context);
//      response.json(context);
//    });
}

module.exports = {
    handleLogin: handleLogin
}