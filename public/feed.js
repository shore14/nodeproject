function pageStarted(){
    const row = $();
   $.get("/startFeed", function(results) {
      for (const key in results)
      {
          console.log(key + ": " + obj[key]);
      }
   });
}