const fmodel = require('../model/feedModel.js');


function handleStartFeed(req, res){
    fmodel.getTopTen(function(err, results){
        // const context = results;
        console.log("Controller " + results);
        
     
    })
    res.send(results);
}

module.exports = {
    handleStartFeed: handleStartFeed
}