"use strict";
// 2 PTS: use a global variable
let isValid = true;
//10 PTS: use jquery plug-in

$(document).ready(function() {
    $("#contact_form").submit(
        function(event) {
            // 10 PTS: Use Form Validation On Two Inputs
            // 2 PTS: Use buit-in METHOD of string object(trim)
            let name = $("#user_name").val().trim();
            // 5 PTS: use an if..else if statement
            if (name == "") {
                $("#error_name").text("This field is required");
                isValid = false;
            }
            // 5 PTS: Use a logical NOT operator
            else if (!isNaN(name)) {
                $("#error_name").text("Must be alphabetical");
                isValid = false;
            } else {
                $("#error_name").text("");
            }
            $("#user_name").val(name);

            //email validation
            var emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/;
            let email = $("#email").val().trim();
            if (email == "") {
                $("#error_email").text("This field is required");
                isValid = false;
            } else if (!emailPattern.test(email)) {
                $("#error_email").text("Must be a Valid Email address");
                isValid = false;
            } else {
                $("#error_email").text("");
            }
            $("#email").val(email);


            //phone validation aaa-bbb-cccc
            let phonePattern = /^[2-9]\d{2}-\d{3}-\d{4}$/;
            let phone = $("#phone_number").val().trim();
            if (phone == "") {
                $("#error_phone").text("This field is required");
                isValid = false;
            } else if (!phonePattern.test(phone)) {
                $("#error_phone").text("Must enter 000-000-0000 format");
                isValid = false;
            } else {
                $("#error_phone").text("");
            }
            $("#phone_number").val(phone);


            //prevent submission of form when entry is invalid
            // 5 PTS: use an If statement 
            if (isValid == false) {
                event.preventDefault();
            }

        })
});