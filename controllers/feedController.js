const fmodel = require('../model/feedModel.js');


function handleStartFeed(req, res){
    fmodel.getTopTen(function(err, results){
        // const context = results;
        console.log("Controller " + JSON.stringify(results));
        // results = {
        //     results: results
        // };
        res.json(results);
    });
    
}
 function handleAdd(req,res){

 }
module.exports = {
    handleStartFeed: handleStartFeed
    handleAdd: handleAdd
}