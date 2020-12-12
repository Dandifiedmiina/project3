document.cookie = "expiress=  Sat,  31 Dec  2021 12:00:00 UTC";

//tehty alkuun  virheilmoitusten  muuttujat, mikäli tarvetta useampaan funktioon

var h = $("<b></b>").text("* Please add a new hobby");
$("h").append(h);

var sum = 0;

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

//lasketaan harrastusten määrä per harrastus
function sumHobby() {
  var sum = 0;
  document.getElementById("added").style.visibility = "visible";
  for (i = 0; i < 7; i++) {
    //otetaan muuttujassa huomioon päivien määrä (alle 7)
    var t = document.getElementsByName("time")[i].value;
    var tFloat = parseFloat(t);
    sum = sum + tFloat;
  }
  document.getElementById("added").value = sum;
}

//toistetaan ylempi alla olevissa. Päivien määrä muuttuu edeltävän loputtua'
function sumHobby2() {
  var sum = 0;
  document.getElementById("added2").style.visibility = "visible";
  for (i = 7; i < 14; i++) {
    var t = document.getElementsByName("time")[i].value;
    var tFloat = parseFloat(t);
    sum = sum + tFloat;
  }
  document.getElementById("added2").value = sum;
}

function sumHobby3() {
  var sum = 0;
  document.getElementById("added3").style.visibility = "visible";
  for (i = 14; i < 21; i++) {
    var t = document.getElementsByName("time")[i].value;
    var tFloat = parseFloat(t);
    sum = sum + tFloat;
  }
  document.getElementById("added3").value = sum;
}
function sumHobby4() {
  var sum = 0;
  document.getElementById("added4").style.visibility = "visible";
  for (i = 21; i < 28; i++) {
    var t = document.getElementsByName("time")[i].value;
    var tFloat = parseFloat(t);
    sum = sum + tFloat;
  }
  document.getElementById("added4").value = sum;
}

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
