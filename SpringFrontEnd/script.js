$(document).ready(function(){
    $('#submitBtn').click(function(){
        const n=$("#name").val();
        const o=$("#email").val();
        const p=$("#number").val();
        const q=$("#age").val();

        alert("submitted the following details\n"+n +"\n"+o+ "\n"+ p+"\n"+q);
        var name = $('#name').val();
        var email = $('#email').val();
        var number = $('#number').val();
        var age = $('#age').val();

        console.log("Name: " + name);
        console.log("Email: " + email);
        console.log("Number: " + number);
        console.log("Age: " + age);
    });
});