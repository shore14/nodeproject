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
    var title =  req.body.title;
    var body = req.body.body;
    var type_def = req.body.type;
    var items = [title, body, type_def];
    console.log("controller: " + title + body + type_def);
 }
module.exports = {
    handleStartFeed: handleStartFeed
    ,handleAdd: handleAdd
}