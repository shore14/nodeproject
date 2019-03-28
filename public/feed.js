function getStarted(){
    const row = $();
    $(document).ready(function() {
   $.get("/startFeed", function(results) {
    //   for (const key in results)
    //   {
    //       console.log("in the loop");
    //       console.log(key + ": " + obj[key]);
    //   }
    console.log("js" + JSON.stringify(results));
    document.getElementById("start").innerHTML = JSON.stringify(results);
   })
});
}