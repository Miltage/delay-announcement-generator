import "./style.scss";

console.log("Started!");

var optionsIntro = ["To our valued customers,", "Greetings gamers!", "Dear friends,", "Hello everybody,"];

var generated, introSpan;

function randomize() {
  introSpan.innerHTML = optionsIntro[Math.floor(Math.random() * optionsIntro.length)];
}

window.onload = function () {
  generated = document.getElementById("generated");
  introSpan = document.getElementById("intro");
  randomize();
  generated.classList.add("visible");
}