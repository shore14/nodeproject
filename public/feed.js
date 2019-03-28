function getStarted(){
    const el = $();
    $(document).ready(function() {
   $.get("/startFeed", function(results) {
     rows = JSON.stringify(results);
     for (row in results.rows){
         el = el.add(<div>+row.title + row.body + row.type_def+</div>);
     }
     $("start").append(el);
    console.log("js" + JSON.stringify(results));
    // document.getElementById("start").innerHTML = JSON.stringify(results);
   })
});
}