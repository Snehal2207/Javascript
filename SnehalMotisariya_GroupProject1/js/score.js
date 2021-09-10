"use strict";
let scores = [];

$(document).ready(function () {
    //display data in the table
    var displayScores = function () {
        var table = $("<table>").addClass("scoreTable");
        for (let a = 0; a < scores.length; a++) {

            let scoreString = "";
            scoreString += `<tr><td>Name: ${scores[a].firstName} ${scores[a].lastName}</td>
            <td>English: ${scores[a].sub1}</td><td>Maths: ${scores[a].sub2} </td><td>Science: ${scores[a].sub3}</td></tr>`;
            table.append(scoreString);
        }
        $("#table_score").html(table);

    };

    $("#add_button").click(function () {
        //call value from input and store in object
        var obj = {};
        obj["firstName"] = $("#first_name").val();
        obj["lastName"] = $("#last_name").val();
        obj["sub1"] = $("#sub_1").val();
        obj["sub2"] = $("#sub_2").val();
        obj["sub3"] = $("#sub_3").val();
        //validation
        if (isNaN(obj.sub1) || isNaN(obj.sub2) || isNaN(obj.sub3)) {
            alert("Score must be number");
        }
        else if ((0 > obj.sub1 || obj.sub1 > 100) || (0 > obj.sub2 || obj.sub2 > 100) || (0 > obj.sub3 || obj.sub3 > 100)) {
            alert("Score Must be between 0 to 100");
        }
        else if (obj.firstName == "" || obj.lastName == "" || obj.sub1 == "" || obj.sub2 == "" || obj.sub3 == "") {
            alert("Must enter input");
        }
        else {
            //push object to score array
            scores.push((obj));
            console.log(obj);

            displayScores();
            // console.log(scores);
        }
        $("#first_name").val("");
        $("#last_name").val("");
        $("#sub_1").val("");
        $("#sub_2").val("");
        $("#sub_3").val("");
        $("#first_name").focus();
        console.log("button clicked");
    })

    //clear table
    $("#clear_button").click(function () {

        scores.length = 0;
        // remove the score data from the web page
        $(".scoreTable").html("");
        $("#first_name").focus();
    });

    //sort by first name
    $("#sort_button").click(function () {

        scores.sort(function (a, b) {
            var lastNameA = a.firstName.toUpperCase();
            var lastNameB = b.firstName.toUpperCase();
            if (lastNameA < lastNameB) {
                return -1;
            }
            if (lastNameA > lastNameB) {
                return 1;
            }
            return 0;
        });
        displayScores();
    });

    $("#first_name").focus();
})