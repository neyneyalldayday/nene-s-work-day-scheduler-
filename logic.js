$(document).ready(function () {
    // i need to list my variables
    var workHours = [9, 10, 11, 12, 13, 14, 15, 16, 17]
    var todaysDate = moment().format('MMMM Do YYYY');
    var localTime = moment().format('H');


    console.log(localTime)
    // displaying the date
    $("#currentDay").append(todaysDate)



    //for loop 
    for (var i = 0; i < workHours.length; i++) {
        // make these freaking colors work
        if (workHours[i] / 12 > 1) {

            console.log(workHours[i]);
            timeDay = "PM";
            console.log(workHours[i] * 10);
            hour = workHours[i] - 12;
        } else {
            var hour = workHours[i];
            if (workHours[i] == 12) {
                timeDay = "PM"
            } else {
                timeDay = "AM"
            };
        };



        // creating my elements
        var newEl = $("<div>");
        var timeEl = $("<div>");
        var planEl = $("<textarea>");
        var saveButton = $("<button>");
        var iconEl = $("<i>");


        // setting attributes and messing with css
        newEl.attr("data-hour", workHours[i]);
        newEl.attr("class", "row")
        planEl.attr("class", "description col 10");
        planEl.attr("id", "text" + [i]);
        timeEl.attr("class", "hour col-1");
        saveButton.attr("class", "saveBtn col-1");
        saveButton.attr("id", [i]);
        iconEl.attr("class", "far fa-save");


        // attaching the elements
        $(".container").append(newEl)

        newEl.append(timeEl)
        newEl.append(planEl)
        newEl.append(saveButton)
        saveButton.append(iconEl)

        $("#text" + [i]).append(
            localStorage.getItem("newInfo" + [i])
        );

        timeEl.text(hour + timeDay);

        // trying to make these colors dynamically change
        if (workHours[i] == localTime) {
            planEl.attr("class", "description col 10 present")
        } else if (workHours[i] < localTime) {
            planEl.attr("class", "description col 10 past")
        } else {
            planEl.attr("class", "description col 10 future")
        }
    }
    $(".saveBtn").on("click", function () {
        var textKey = "newInfo" + this.id;
        var textEl = "#text" + this.id;
        console.log(this.id)
        // my local storage set up
        console.log(textKey)
        console.log(textEl)
        localStorage.setItem(textKey, $(textEl).val());
    })

})