// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

$("#btnSubmit").click(function(event) {
    event.preventDefault(); // Prevent form submission

    let hours = parseInt($("#numHours").val(), 10);
    let rate = 40;

    if (isNaN(hours) || hours < 0) {
        hours = 0;
    } else if (hours > 50) {
        hours = 50;
    }

    let estimate = hours * rate;

    $("#estimatedCost").val(estimate);
});
