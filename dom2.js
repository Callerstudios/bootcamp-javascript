// DOM Manipulation => Document Object Model Manipulation
// let para = document.createElement('p')
// para.innerHTML = "Hey there Mr Abdullateef"
// body.appendChild(para)
// let linkTag = document.createElement('a')
// linkTag.textContent = "Click Me"
// linkTag.href = "https://www.youtube.com"
// body.appendChild(linkTag)

let definition =
  "DOM Manipulation is the process of determining what happens on the HTML from Javascript";
// Getting a reference of the body tag
let body = document.body;
// Creating the tags
let h1 = document.createElement("h1");
let h2 = document.createElement("h2");
let pTag = document.createElement("p");
let pTag2 = document.createElement("p");
// Inputing tags content
h1.innerText = "DOM Manipulation";
h2.innerText = "Definition";
pTag.innerText = definition;
pTag2.innerText = "We are doing this today";
// Appending Children
// body.appendChild(h1);
// body.appendChild(h2);
// body.appendChild(pTag);
// body.appendChild(pTag2);

let array = [h1, h2, pTag2, pTag];

// array.forEach((tag) => {
//   body.appendChild(tag);
// });

// array.map((tag) => {
//   body.appendChild(tag);
// });

// for(const tag of array){
//     body.appendChild(tag)
// }

// for (let index = 0; index < array.length; index++) {
//   body.appendChild(array[index]);
// }

// A loop in Javascript is a syntax that allows us to run a block of code multiple times
// For example, if I want to send 'I won't do that again' 1000 times, instead of typing 1000
// lines, I can type it once and tell it to run 1000 times

// CSS - Cascading Style Sheets
h1.style.color = "red";
h2.style.color = "blue";
pTag.style.color = "green";
pTag2.style.color = "pink";

h1.style.backgroundColor = "purple";
h1.style.textAlign = "center";
h1.style.width = "fit-content";
h1.style.textDecoration = "underline";
h1.style.margin = "0 auto";
h1.style.padding = "10px";
h1.style.cursor = "pointer";

// Events
let rotateAngle = 0;
h1.addEventListener("mousemove", () => {
  rotateAngle += 30;
  circle.style.top = rotateAngle / 30 + "px";
  h1.style.filter = `hue-rotate(${rotateAngle}deg)`;
});

let circleTopOffset = 500;
let circleLeftOffset = 500;

let previousX = 0;
let previousY = 0;
let multiplier = 10;
let circle = document.getElementById("circle");
const playingPad = document.getElementById("game-box");
function game() {
  playingPad.addEventListener("mousemove", (event) => {
    // alert(`X: ${event.clientX}px, Y: ${event.clientY}px`);

    // circleTopOffset += 1;

    let currentX = event.clientX;
    let currentY = event.clientY;

    if (currentX > previousX && circleLeftOffset < window.innerWidth - 50) {
      circleLeftOffset += multiplier;
    } else {
      if (circleLeftOffset > 10) {
        circleLeftOffset -= multiplier;
      }
    }
    if (currentY > previousY && circleTopOffset < window.innerHeight - 50) {
      circleTopOffset += multiplier;
    } else {
      if (circleTopOffset > 10) {
        circleTopOffset -= multiplier;
      }
    }
    circle.style.top = circleTopOffset + "px";
    circle.style.left = circleLeftOffset + "px";
    previousX = currentX;
    previousY = currentY;
  });
}
game();
