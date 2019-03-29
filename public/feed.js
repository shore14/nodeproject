function getStarted(){
    const el = $();
    $(document).ready(function() {
   $.get("/startFeed", function(results) {
     rows = JSON.parse(results);
     for (const row in rows){
         for(const i = 1; i < rows[row].length; i++){
            const title = rows[i].title;
            const body = rows[i].body;
            const type_def = rows[i].type_def;
            const bagde = document.createElement('div');
            bagde.className = 'feedbox';
            bagde.innerHTML =
                '<h2>' + title + '</h2></br>'
                +'<div>' + body + '</div>';
            document.getElementById('start').innerHTML.appendChild(bagde);
         }
     }
   })
});
}