$(document).ready(function() {
    $("#submit").on("click", function() {
        //form validation
        function validateForm() {
            var isValid = true;
            $('.validate').each(function() {
                if ($(this).val() === ''){
                    isValid = false;
                }
            });

            $('.browser-default').each(function() {
                if ($(this).val() === ""){
                    isValid = false;
                }
            });

            return isValid;
        }

        //if everything is filled
        if (validateForm() == true) {
            //creates a new friend from the values submitted
            var newFriend = {
                name: $('#name').val().trim(),
                profilePic: $('#photo').val().trim(),
                scores: [
                    $('#question-1').val(),
                    $('#question-2').val(),
                    $('#question-3').val(),
                    $('#question-4').val(),
                    $('#question-5').val(),
                    $('#question-6').val(),
                    $('#question-7').val(),
                    $('#question-8').val(),
                    $('#question-9').val(),
                    $('#question-10').val(),
                ]
            };

            //Grabs current URL of website
            var currentURL = window.location.origin;

            //AJAX posts the data to friends API.
            $.post(currentURL + "/api/friends", newFriend, function(data) {
                //Grab the result from the AJAX post so that the best match's name and photo are displayed.
                $("#matchName").text(data.name);
                $("#matchPic").attr("src", data.profilePic);

            });
            // Show the modal with the best match
                $('.modal').modal();

            //clear form after submission
            $('#name').val("");
            $('#photo').val("");
            $('#question-1').val("");
            $('#question-2').val("");
            $('#question-3').val("");
            $('#question-4').val("");
            $('#question-5').val("");
            $('#question-6').val("");
            $('#question-7').val("");
            $('#question-8').val("");
            $('#question-9').val("");
            $('#question-10').val("");
        } else {
            alert("Please fill out ALL fields before submitting survey!")
        }

        
    });
});
    