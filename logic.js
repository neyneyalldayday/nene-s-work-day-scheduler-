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
        //connecting variables to where they will be used
        var freshEl = $("<div>");
        var timeEl = $("<div>");
        var agendaEl = $("<textarea>");
        var saveButton = $("<button>");
        var iconEl = $("<i>");

        // setting attributes for the elements
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
        //funtion method for saving what you type in
        $("#text" + [i]).append(
            localStorage.getItem("newInfo" + [i])
        );

        timeEl.text(workingHours[i]);

        // dynamically changing colors based off time of day

        if ((i + 9) < moment().hour()) {
            agendaEl.attr("class", "col-10 past");
        } else if ((i + 9) === moment().hour()) {
            agendaEl.attr("class", "col-10 present");
        } else {
            agendaEl.attr("class", "col-10 future");
        }
    }
    //save button functionality
    $(".saveBtn").on("click", function () {
        var textKey = "newInfo" + this.id;
        var textEl = "#text" + this.id;       
        localStorage.setItem(textKey, $(textEl).val());
    })

})