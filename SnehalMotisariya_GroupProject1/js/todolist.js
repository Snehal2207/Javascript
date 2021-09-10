"use strict";
$(document).ready(function () {

    //add activity to list
    $("#add_button").click(function () {
        if ($("#todoListinput").val() == "") {
            alert("enter valid input");
        }
        else {
            var activity = $('#todoListinput').val();
            $('#orderList').append("<li><input class='checkbox' type='checkbox'/>" + activity + "<a class='remove'>x</a></li>");
            $("#todoListinput").val("");
            $("#todoListinput").focus();
        }
    })

    //remove activity on "X" button
    $(document).on("click", ".remove", function () {
        $(this).parent().remove();
    });
    //checked activity when done
    $(document).on("change", ".checkbox", function () {
        $(this).parent().toggleClass("checked");
    })

    $("#todoListinput").focus();

})