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
        $(document.getElementById('start')).append(JSON.stringify(field.title) + " ");
    });
    //  for (const row in results){
    //         var title = JSON.stringify(row.title);
    //         var body = row.body;
    //         var type_def = row.type_def;
    //         badge +=  '<h2>' + title + '</h2></br>'
    //             +'<div>' + body + '</div>';
    //      }
    //     document.getElementById('start').innerHTML = badge;
   });
});
}