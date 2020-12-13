document.cookie = "expiress=  Sat,  31 Dec  2021 12:00:00 UTC";

//tehty alkuun  virheilmoitusten  muuttujat, mikäli tarvetta useampaan funktioon

var h = $("<b></b>").text("* Please add a new hobby");
$("h").append(h);

var sum = 0;
var sum2 = 0;
var sum3 = 0;
var sum4 = 0;

//motivaatio quotet ja randomizer.

$("#motivation").click(function () {
  var quotes = [
    "The resistance that you fight physically in the gym and the resistance that you fight in life can only build a strong character",
    "The best activities for your health are pumping and humping",
    "There are no shortcuts-everything is reps, reps, reps.",
    "When I was 15-years-old, I took off my clothes and looked in the mirror. When I stared at myself naked, I realized that to be perfectly proportioned I would need twenty-inch arms to match the rest of me",
    "Stop whining.",
    "My instinct was to win, eliminate anyone who is in competition, destroy my enemy, and move on without any kind of hesitation at all.",
    "Positive thinking can be contagious. Being surrounded by winners helps you develop into a winner.",
  ];

  var luku = Math.round(Math.random() * 5);
  $("h5").eq(0).html(quotes[luku]);
});

$("#calculate").click(function () {
  var t1 = $("#added").val();
  var t2 = $("#added2").val();
  var t3 = $("#added3").val();
  var t4 = $("#added4").val();

  sum = parseFloat(t1) + parseFloat(t2) + parseFloat(t3) + parseFloat(t4);

  $("#total").val(sum);
});

$(document).ready(function () {
  $("img").click(function () {
    $("img").fadeOut();
  });
});

//lasketaan harrastusten määrä per harrastus
$("input").change(function () {
  $("#added").css("visibility", "visible");
  $("#added2").css("visibility", "visible");
  $("#added3").css("visibility", "visible");
  $("#added4").css("visibility", "visible");

  var sum1 = 0;
  var sum2 = 0;
  var sum3 = 0;
  var sum4 = 0;

  $(".time").each(function () {
    sum1 = sum1 + parseFloat($(this).val());
  });

  $(".time2").each(function () {
    sum2 = sum2 + parseFloat($(this).val());
  });
  $(".time3").each(function () {
    sum3 = sum3 + parseFloat($(this).val());
  });

  $(".time4").each(function () {
    sum4 = sum4 + parseFloat($(this).val());
  });

  $("#added").val(sum1);
  $("#added2").val(sum2);
  $("#added3").val(sum3);
  $("#added4").val(sum4);
});

//Mahdollisuus vaihtaa harrastus
$("#changeHobby").click(function () {
  var ch = $("#type");
  var change = $("#dropdown option:selected").text();
  var newHobby = $("#hobby").val();

  if (newHobby == "") {
    $("#error").appendChild(h);
    $("#hobby").css("border", "red solid 2px");
    return false;
  }
  if ($("#dropdown option:selected").text() == "") {
    alert("Choose a hobby to change!");
    return false;
  } else if (change == "Biking") {
    $("#biking").text(newHobby);
  } else if (change == "Running") {
    $("#running").text(newHobby);
  } else if (change == "Swimming") {
    $("#swimming").text(newHobby);
  } else if (change == "Climbing") {
    $("#climbing").text(newHobby);
  }
});
