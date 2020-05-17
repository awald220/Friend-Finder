$(document).ready(function(){
$("go-to-survey").on(click, function(){
    event.preventDefault();
    $.get("/..survey.html", function(data){
        console.log(data)
    })
});



$("#submit").on(click, function(){
    event.preventDefault();

    var newFriend = {
        name: $("#name").val().trim(),
        photo: $("#photo").val().trim(),
        scores: [
            $("#question-1").val().trim(),
            $("#question-2").val().trim(),
            $("#question-3").val().trim(),
            $("#question-4").val().trim(),
            $("#question-5").val().trim(),
            $("#question-6").val().trim(),
            $("#question-7").val().trim(),
            $("#question-8").val().trim(),
            $("#question-9").val().trim(),
            $("#question-10").val().trim()
        ]
    };

    // create the new friend in the api/friends page
    $.post("/api/friends", newFriend)

    $.done(function(data){
        //set attributes
     
    })
    
});
});