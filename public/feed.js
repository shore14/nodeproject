function getStarted(){
    const el = $();
 $(document).ready(function() {
   $.getJSON("/startFeed", function(results) {
    //  rows = JSON.stringify(results);
    //  rows = JSON.parse(results);
    var items = [];
    var badge = "";
    console.log(results);
     for (const row in results){
            var title = row.title;
            var body = row.body;
            var type_def = rows.type_def;
            // const bagde = document.createElement('div');
            // bagde.className = 'feedbox';
            // bagde.innerHTML =
            badge +=  '<h2>' + title + '</h2></br>'
                +'<div>' + body + '</div>';
         }
        document.getElementById('start').innerHTML = badge;
   })
});
}