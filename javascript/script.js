$(document).ready(function() {
  $("form").submit(function(event){
    event.preventDefault();
    const n=$("#name").val();
    const num=$("#number").val();
    alert("Name : "+n +"\nNumber : "+num);
        });  

  $("#add").click(function(){
    $("#addingtasks").append("<div class='row'> <div class=\"bg-success box p-4 mb-5 col-2 \"> <p>This is a new paragraph.</p> </div></div>");
  });
  $("#remove").click(function(){
    $("#addingtasks div:last").remove();
  });
});
