function getStarted(){
    const el = $();
 $(document).ready(function() {
   $.getJSON("/startFeed", function(results) {
    //  rows = JSON.stringify(results);
    //  rows = JSON.parse(results);
    var items = [];
    var badge = "";
    console.log(results);
    $.each(results, function(i, field){
        // $("start").append(field + " ");
        JSON.stringify(field);
        $(document.getElementById('start')).append("<div class='card'>" + field.title.toUpperCase() + " </br>" + field.body + "</br></br>");
    });
  });
});
}