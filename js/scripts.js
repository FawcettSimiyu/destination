//Business Logic
function Destination(name,location,landmark,date,notes,history){
  this.name = name;
  this.location = location;
  this.landmark = landmark;
  this.date = date;
  this.notes = notes;
  this.history = history;
}

/*var newDestination1 = new Destination("Paris","France","Eifel tower","12/12/1994", "Awsome","War torn");
Destination.prototype.methodName = function () {

};*/
//User Interface
$(document).ready(function(){
  $("form#new-destination").submit(function(event){
    event.preventDefault();

    var inputDestinationName = $("input#new-destination-name").val();
    var inputLocation = $("input#new-location-name").val();
    var inputLandmark = $("input#new-landmark-name").val();
    var inputDate = $("input#new-date").val();
    var inputNote = $("textarea#new-note").val();
    var inputHistory = $("textarea#new-history").val();

    var newDestination = new Destination(inputDestinationName,inputLocation,inputLandmark,inputDate,inputNote,inputHistory);

    $("ul#destinations").append("<li><span class='destination'>" + newDestination.name + "</span></li>");

    $(".destination").last().click(function(){
      $("#show-destination").show();
    $(".destination-name").fadeIn(1000).text(newDestination.name);
    $(".location-name").fadeIn(1300).text(newDestination.location);
    $(".landmark-name").fadeIn(1600).text(newDestination.landmark);
    $(".date-name").fadeIn(1900).text(newDestination.date);
    $(".note-name").fadeIn(2200).text(newDestination.notes);
    $(".history-name").fadeIn(2500).text(newDestination.history);

    });

    $("input#new-date").val("");
    $("textarea#new-note").val("");
  });
});
/*
$(".destination").last().click(function(){
  $("#show-destination").show();
  $("#show-destination h2").text(newDestination.name);
  $(".new_name").text(newDestination.name);
  $(".new_location").text(newDestination.location);
  $(".new_landmark").text(newDestination.landmark);
  $(".new_date").text(newDestination.date);
  $(".new_note").text(newDestination.notes);
  $(".new_history").text(newDestination.history);
});
*/
