function getStarted(){
    const el = $();
    $(document).ready(function() {
   $.get("/startFeed", function(results) {
     rows = JSON.parse(results);
     for (const row in rows){
            const title = row.title;
            const body = row.body;
            const type_def = rows.type_def;
            // const bagde = document.createElement('div');
            // bagde.className = 'feedbox';
            // bagde.innerHTML =
            const badge =  '<h2>' + title + '</h2></br>'
                +'<div>' + body + '</div>';
            document.getElementById('start').innerHTML = badge;
         }
   })
});
}