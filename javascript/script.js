$(document).ready(function() {
  $("#add").click(function(event){
    const n=$("#name").val();
    $("#addingtasks").append("<div class='row'> <div class=\"bg-success box p-4 mb-5 col-2 \"> <p>"+n+"</p> </div></div>");
    event.preventDefault();
    alert("Task : "+n);
        });  

  $("#remove").click(function(){
    const num=$("#number").val();
    $("#addingtasks div").eq(num).remove();
  });
});

