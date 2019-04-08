function getStarted(){
 $(document).ready(function() {
   $.getJSON("/startFeed", function(results) {
    var items = [];
    var badge = "";
    console.log(results);
    $.each(results, function(i, field){
        JSON.stringify(field);
        $(document.getElementById('start')).append("<div class='card'>" + field.title.toUpperCase() + " </br>" + field.body + "</div></br></br>");
    });
  });
});
}

function addCard(){
  // $(document).ready(function() {
    var title = $("#title").val();
    var body = $("#body").val();
    var type_def = $("input[type='radio']").val();
    var items = [title,body,type_def];
    alert(title + " " + body + " " + type_def)
    $.post("/addCard",{title: $("#title").val(), body: $("#body").val(), type_def: $("input[type='radio]:checked").val()}, function(err, results) {
       
    })
   
    $(document.getElementById('start')).append("<div class='card'>" + title.toUpperCase() + " </br>" + body + "</div></br></br>");
  // });
}