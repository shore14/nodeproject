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
        $(document.getElementById('start')).append("<div class='card'>" + field.title.toUpperCase() + " </br>" + field.body + "</div></br></br>");
    });
  });
});
}

function addCard(){
  $(document).ready(function() {
    var title = $("#title").val();
    
alert("Value of title is : " + title);
    var value = $("form input[type='radio']:checked").val();
alert("Value of Changed Radio is : " +value);
  });
}