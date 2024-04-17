/*
//the ready function is used so after loading the full jquery page the function will work
$(document).ready(function() {
  $("h1").css("color", "blue");
});
*/


$("h1").addClass("margin font color");
// $("h1").removeClass("font");


$(".dom-man").html($("h1").hasClass("jojo").toString());

$("button").html("Don't Click");

$("h1").text("Beer");

//set attribute
const x =  $("a").attr("href", "https://www.yahoo.com/");