import "./style.scss";
import domtoimage from 'dom-to-image';
const { faker } = require('@faker-js/faker');

console.log("Started!");

var optionsIntro = [
  "To our valued customers,", 
  "Greetings gamers!", 
  "Dear friends,", 
  "Hello everyone,", 
  "To our loyal supporters,",
  "To whom it may concern,"
];
var optionsLine1 = [
  "We have important news to share with you.", 
  "We have some troubling news to share with you today.", 
  "We have a difficult announcement to make.", 
  "We come to you today with some unfortunate news."
];
var optionsLine2 = [
  "Our product won't make the release window we were initially aiming for.", 
  "Unfortunately, we will not be able to meet the original deadline for our product.",
  "Regrettably, it looks like we're not going to be able to release our game on time.",
  "With our deadline looming, we've come to the realization that we're not ready yet for a proper launch."
];
var optionsLine3 = [
  "This is why we are delaying our launch date by several months.", 
  "To this end, we have decided to postpone our launch by several months.",
  "After some consideration, we've made the difficult decision to move our launch date."
];
var optionsLine4 = [
  "This saddens us deeply.",
  "It is with heavy hearts that we bring you this news.",
  "It is with great sadness that we bring you this news today.",
  "Nobody is saddened more by this news than us, we promise."
];
var optionsLine5 = [
  "Please know that we are doing everything we can to still get the game out in a timely manner.",
  "We are still committed to bringing you the best game possible.",
  "We ask for your patience and understanding while we continue to work on the game.",
  "We're still incredibly hard at work behind the scenes producing something amazing."
];
var optionsLine6 = [
  "We just need a little more time.",
  "It's just not ready yet.",
  "We're only asking for a few more weeks.",
  "Just a month or two should do it."
];
var optionsLine7 = [
  "The extra time would afford us the resources needed to release a product that is ",
  "With some extra time we can afford to produce a game that is ",
  "In delaying the game we can release something that is ",
  "A few extra weeks would allow us to make something that is ",
  "By postponing our launch we can produce something that is "
];
var optionsLine8 = [
  "more complete and",
  "closer to our initial vision and",
  "more enjoyable to play and",
  "better in almost every regard and",
  "playable and ",
  "worth your money and ",
];
var optionsLine9 = [
  "relatively free of bugs.",
  "frankly, just more awesome.",
  "polished.",
  "actually decent.",
  "something of which we're proud.",
  "actually works, lol.",
  "hits 60fps occasionally.",
];
var optionsOutro = [
  "Thank you for your understanding.",
  "In time, we're sure you'll come to understand.",
  "Until our next delay,",
  "We appreciate your continued support.",
  "We hope this will be the last time we have to say this.",
  "We know you'll forgive us eventually.",
  "Though let's be honest, what are you gonna do, not buy it?",
  "Yours faithfully...",
  "Yours in announcements,",
];
var optionsName = generateNames();
var optionsTitle = [
  "Founder",
  "Head of Studio",
  "Co-founder",
  "Chief of Operations",
  "Announcement Maker",
  "Bearer of Bad News",
  "Bad News Bringer",
  "Studio Publicist",
  "General Manager",
  "Social Media Manager"
];

var options = {
  "intro": optionsIntro,
  "line1": optionsLine1,
  "line2": optionsLine2,
  "line3": optionsLine3,
  "line4": optionsLine4,
  "line5": optionsLine5,
  "line6": optionsLine6,
  "line7": optionsLine7,
  "line8": optionsLine8,
  "line9": optionsLine9,
  "outro": optionsOutro,
  "name": optionsName,
  "title": optionsTitle
}

var generated, buttons;

function generateNames() {
  let names = [];
  for (var i = 0; i < 100; i++) {
    names.push(faker.name.findName());
  }
  return names;
}

function randomize() {
  var spans = document.querySelectorAll("span");
  for (var s of spans) {
    var id = s.getAttribute("id");
    var choices = [...options[id]];
    s.innerHTML = choices[Math.floor(Math.random() * choices.length)];
  }
  randomColor();
}

var colors = ["#FFD32D", "#F53D6B", "#FF7D52", "#FFC233", "#2DCA72", "#00ACFF", "#7047EB", "#F75FDE", "#22577E", "#3A3845", "#4FD3C4", "#FC4F4F"];
function randomColor() {
  
  var node = document.querySelector('body');
  var oldIndex = node.getAttribute("color-index");
  
  var index = Math.floor(Math.random() * colors.length);
  while (oldIndex != null && oldIndex == index)
    index = Math.floor(Math.random() * colors.length);
  var c = colors[index];
  console.log(c);
  node.style.backgroundColor = c;
  var rgb = node.style.backgroundColor.substring(4, node.style.backgroundColor.length-1)
         .replace(/ /g, '')
         .split(',');

  if (parseInt(rgb[0]) + parseInt(rgb[1]) + parseInt(rgb[2]) < 255)
    node.classList.add("light");
  else
    node.classList.remove("light");
  
  node.setAttribute("color-index", index);
}

window.onload = function () {
  generated = document.getElementById("generated");
  buttons = document.getElementById("buttons");
  randomize();
  generated.classList.add("visible");

  var spans = document.querySelectorAll("span");
  for (var s of spans) {
    s.addEventListener("click", function() {
      var id = this.getAttribute("id");
      var choices = [...options[id]];
      choices.splice(choices.indexOf(this.innerHTML), 1);
      this.innerHTML = choices[Math.floor(Math.random() * choices.length)];
    });
  }

  document.getElementById("download").addEventListener("click", function() {
    var node = document.querySelector('body');
    buttons.classList.add("hidden");

    domtoimage.toPng(node)
      .then(function (dataUrl) {
        var link = document.createElement('a');
        link.download = 'delay-announcement.png';
        link.href = dataUrl;
        link.click();
        buttons.classList.remove("hidden");
      })
      .catch(function (error) {
        console.error('oops, something went wrong!', error);
        buttons.classList.remove("hidden");
      });
  });

  document.getElementById("randomize").addEventListener("click", randomize);
  document.getElementById("colors").addEventListener("click", randomColor);
}