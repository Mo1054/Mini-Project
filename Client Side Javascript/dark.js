//Changes the layout of the website to dark mode
function ColourScheme() {
    ///Adds a class named dark to the body
    var bodyClasses = document.body.classList;
    bodyClasses.toggle("dark");


}

//JQuery function that waits for the website to load before running
$(function() {

    $("#ColourChanger").click(ColourScheme);


});