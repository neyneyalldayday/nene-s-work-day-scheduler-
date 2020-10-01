$(document).ready(function () {
    // work hours current date and local san antonio time as variables
    var timeCounter = function () {
        $("#thisDay").text(moment().format('MMMM Do YYYY, h:mm a'));
    };
    timeCounter()
    setInterval(timeCounter, 1000);
    var workingHours = ["9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm"]


    // for loop 
    for (var i = 0; i < workingHours.length; i++) {

        var freshEl = $("<div>");
        var timeEl = $("<div>");
        var agendaEl = $("<textarea>");
        var saveButton = $("<button>");
        var iconEl = $("<i>");

        // setting attributes and messing with css
        freshEl.attr("data-hour", workingHours[i]);
        freshEl.attr("class", "row")
        agendaEl.attr("class", "col-10");
        agendaEl.attr("id", "text" + [i]);
        timeEl.attr("class", "hour col-1");
        saveButton.attr("class", "saveBtn col-1");
        saveButton.attr("id", [i]);
        iconEl.attr("class", "far fa-save");

        // attaching the elements
        $(".container").append(freshEl)

        freshEl.append(timeEl)
        freshEl.append(agendaEl)
        freshEl.append(saveButton)
        saveButton.append(iconEl)

        $("#text" + [i]).append(
            localStorage.getItem("newInfo" + [i])
        );

        timeEl.text(workingHours[i]);

        // trying to make these colors dynamically change

        if ((i + 9) < moment().hour()) {
            agendaEl.attr("class", "col-10 past");
        } else if ((i + 9) === moment().hour()) {
            agendaEl.attr("class", "col-10 present");
        } else {
            agendaEl.attr("class", "col-10 future");
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