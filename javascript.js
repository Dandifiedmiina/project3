ocument.cookie = "expiress=  Sat,  31 Dec  2021 12:00:00 UTC";

//tehty alkuun  virheilmoitusten  muuttujat, mikäli tarvetta useampaan funktioon

var h = document.createElement("b");
var t = document.createTextNode("* Please add a new hobby");
h.appendChild(t);

//motivaatio quotet ja randomizer.

function motivated() {
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
  document.getElementsByTagName("h5")[0].innerHTML = quotes[luku];
}

function calculate() {
  //lasketaan harrastusten yhteismäärä
  var sum = 0;
  for (i = 0; i < document.getElementsByName("time").length; i++) {
    var t = document.getElementsByName("time")[i].value;
    var tFloat = parseFloat(t);
    sum = sum + tFloat;
  }

  document.getElementById("total").value = sum;
}

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
function changeHobby() {
  var ch = document.getElementById("type");
  var change = ch.options[ch.selectedIndex].value;

  if (document.getElementById("hobby").value == "") {
    document.getElementById("error").appendChild(h);
    document.getElementById("hobby").style.borderColor = "red";
    return false;
  }
  if (document.dropdown.hobbies.selectedIndex == 0) {
    alert("Choose a hobby to change!");
    return false;
  } else if (change == "biking") {
    document.getElementById("biking").innerHTML = document.getElementById(
      "hobby"
    ).value;
  } else if (change == "running") {
    document.getElementById("running").innerHTML = document.getElementById(
      "hobby"
    ).value;
  } else if (change == "swimming") {
    document.getElementById("swimming").innerHTML = document.getElementById(
      "hobby"
    ).value;
  } else if (change == "climbing") {
    document.getElementById("climbing").innerHTML = document.getElementById(
      "hobby"
    ).value;
  }
}
