import "./style.scss";
import domtoimage from 'dom-to-image';
const { faker } = require('@faker-js/faker');

var optionsIntro = [
  "To our valued customers,", 
  "Greetings gamers!", 
  "Dear friends,", 
  "Hello everyone,", 
  "To our loyal supporters,",
  "To whom it may concern,",
  "Hey, you!"
];
var optionsLine1 = [
  "We have important news to share with you.", 
  "We have some troubling news to share with you today.", 
  "We have a difficult announcement to make.", 
  "We come to you today with some unfortunate news.",
  "We have something important to tell you."
];
var optionsLine2 = [
  "Our product won't make the release window we were initially aiming for.", 
  "Unfortunately, we will not be able to meet the original deadline for our product.",
  "Regrettably, it looks like we're not going to be able to release our game on time.",
  "With our deadline looming, we've come to the realization that we're not ready yet for a proper launch.",
  "It looks like our game is not going to be finished on time.",
  "We have grossly over-estimated the amount of work required to get our game out the door."
];
var optionsLine3 = [
  "This is why we are delaying our launch date by several months.", 
  "To this end, we have decided to postpone our launch by several months.",
  "After some consideration, we've made the difficult decision to move our launch date.",
  "We have decided to push back our launch date a little bit.",
  "We're going to have to rethink our launch plan a little."
];
var optionsLine4 = [
  "This saddens us deeply.",
  "It is with heavy hearts that we bring you this news.",
  "It is with great sadness that we bring you this news today.",
  "Nobody is saddened more by this news than us, believe me.",
  "We're just as bummed as you are, believe me.",
  "Sucks, I know.",
  "Please don't @ me.",
  "We can't believe it either.",
  "We're deeply sorry.",
  "Not a great look for us, we know."
];
var optionsLine5 = [
  "Please know that we are doing everything we can to still get the game out in a timely manner.",
  "We are still committed to bringing you the best game possible.",
  "We ask for your patience and understanding while we continue to work on the game.",
  "We're still incredibly hard at work behind the scenes producing something amazing for you.",
  "Please know that we take our promises to our fans very seriously.",
  "We promise that our developers are getting very little sleep right now.",
  "We're crunching super hard to get this game to you.",
  "We're asking for your understanding and patience in this difficult time."
];
var optionsLine6 = [
  "We just need a little more time.",
  "It's just not ready yet.",
  "We're only asking for a few more weeks.",
  "Just a month or two should do it.",
  "We're just not quite there yet.",
  "Unfortunately, these things take time.",
  "You can't rush art."
];
var optionsLine7 = [
  "The extra time would afford us the resources needed to release a product that is ",
  "With some extra time we can afford to produce a game that is ",
  "In delaying the launch we can hope to release something that is ",
  "A few extra weeks would allow us to make something that is ",
  "By postponing our launch we can produce something that is ",
  "Pushing back our launch date, we are confident that we can give you a product that is "
];
var optionsLine8 = [
  "more complete and",
  "closer to our initial vision and",
  "more enjoyable to play and",
  "better in almost every regard and",
  "playable and ",
  "worth your money and ",
  "functional and",
  "feature-complete and",
  "a little more polished and"
];
var optionsLine9 = [
  "relatively free of bugs.",
  "frankly, just more awesome.",
  "polished.",
  "actually decent.",
  "something we can actually be proud of.",
  "something we can show our moms.",
  "actually works, lol.",
  "hits 60fps occasionally.",
  "crashes way less.",
  "is under 2TB.",
  "gets at least 1 positive Steam review.",
  "doesn't trigger your anti-virus.",
  "doesn't cost an arm and a leg.",
  "won't frustrate the life out of you.",
  "won't make you hate us.",
  "doesn't melt your graphics card."
];
var optionsOutro = [
  "Thank you for your understanding.",
  "In time, we're sure you'll come to understand.",
  "Until our next delay,",
  "We appreciate your continued support.",
  "We hope this will be the last time we have to say this.",
  "We hope you can find it within yourselves to forgive us.",
  "Though let's be honest, what are you gonna do, not buy it?",
  "Yours faithfully,",
  "Yours in announcements,",
  "Please don't cancel your pre-orders.",
  "Who knew making games was like, super hard?"
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
var optionsDate = generateDates();

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
  "title": optionsTitle,
  "date": optionsDate
}

var generated, buttons, logo;

function generateNames() {
  let names = [];
  for (var i = 0; i < 100; i++) {
    names.push(faker.name.findName());
  }
  return names;
}

function generateDates() {
  let dates = [];
  let options = ["We're currently aiming for", "Our new planned date of release is", "Going forward, our new launch date is", "For now, we're going to be shooting for"];
  for (var i = 0; i < 100; i++) {
    dates.push(options[Math.floor(Math.random() * options.length)] + " <b>" + faker.date.future().toLocaleDateString() + "</b>.");
  }
  return dates;
}

function generateLogo() {
  var icon = logo.querySelector(".image");
  var img = logo.querySelector(".image img");
  icon.style.borderWidth = (10 + Math.random() * 5) + "px";
  img.style.padding = (10 * Math.random()) + "px";
  var index = Math.floor(Math.random() * 41) + 1;

  var oldIndex = img.getAttribute("logo-index");
  while (oldIndex != null && index == oldIndex)
    index = Math.floor(Math.random() * 41) + 1;

  img.setAttribute("src", "assets/logos/" + index + ".svg");
  img.setAttribute("logo-index", index);
}

function generateStudioName() {
  var adjectives = ["happy", "cuddly", "angry", "drunk", "frantic", "adorable", "rare", "ugly", "cute", "sleepy", "dancing", "classic", "majestic", "flying", "golden", "wobbly", "grumpy"];
  var nouns = ["dinosaur", "sword", "lobster", "bandit", "goblin", "face", "bread", "toast", "lemon", "table", "hook", "fox", "camel", "wizard", "trout", "punch", "nose", "potion", "poison", "bear", "monkey", "panda", "ocean", "sunset", "soup", "llama", "valley", "mountain", "raft"];
  var index1 = Math.floor(Math.random() * adjectives.length);
  var a = adjectives[index1];
  var index2 = Math.floor(Math.random() * nouns.length);
  var b = nouns[index2];
  var prefix = a + " " + b;
  var s = ["studios", "games", "entertainment", "media", "interactive"];
  var name = logo.querySelector("span");
  name.innerHTML = prefix + " " + s[Math.floor(Math.random() * s.length)];
}

function randomize() {
  var spans = document.querySelectorAll("p span");
  for (var s of spans) {
    var id = s.getAttribute("id");
    var choices = [...options[id]];
    s.innerHTML = choices[Math.floor(Math.random() * choices.length)];
  }
  randomColor();
  randomFont();
  generateLogo();
  generateStudioName();
}

var colors = ["#FFD32D", "#F53D6B", "#FF7D52", "#FFC233", "#2DCA72", "#00ACFF", "#9FB4FF", "#F75FDE", "#4FD3C4", "#FC4F4F"];
var complementary = ["#2d59ff", "#3df5c7", "#52d4ff", "#3370ff", "#ca2d85", "#ff5300", "#ffea9f", "#5ff778", "#d34f5e", "#4ffcfc"];
function randomColor() {  
  var node = document.querySelector('body');
  var oldIndex = node.getAttribute("color-index");
  
  var index = Math.floor(Math.random() * colors.length);
  while (oldIndex != null && oldIndex == index)
    index = Math.floor(Math.random() * colors.length);
  var c = colors[index];
  node.style.backgroundColor = c;  
  node.setAttribute("color-index", index);  

  var icon = logo.querySelector(".image");
  icon.style.backgroundColor = complementary[index];
}

var fonts = ["'Lato', sans-serif", "'Kanit', sans-serif", "'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif", "'Arvo', serif"];
function randomFont() {
  var node = document.querySelector('body');
  var oldIndex = node.getAttribute("font-index");
  var index = Math.floor(Math.random() * fonts.length);
  while (oldIndex != null && oldIndex == index)
    index = Math.floor(Math.random() * fonts.length);
  var f = fonts[index];
  node.style.fontFamily = f;
  node.setAttribute("font-index", index);
}

window.onload = function () {
  generated = document.getElementById("generated");
  buttons = document.getElementById("buttons");
  logo = document.getElementById("logo");
  randomize();
  generated.classList.add("visible");

  var preload = document.getElementById("preload");
  
  for (var i = 0; i < 41; i++) {
    var img = document.createElement("img");
    img.setAttribute("src", "assets/logos/" + (i + 1) + ".svg");
    preload.appendChild(img);
  }

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
  document.getElementById("fonts").addEventListener("click", randomFont);
  document.querySelector("#logo .image").addEventListener("click", generateLogo);
  document.querySelector("#logo span").addEventListener("click", generateStudioName);
}