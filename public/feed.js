function getStarted(){
    const row = $();
   $.get("/startFeed", function(results) {
      for (const key in results)
      {
          console.log("in the loop");
          console.log(key + ": " + obj[key]);
      }
   });
};