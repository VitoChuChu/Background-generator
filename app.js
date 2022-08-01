let body = document.querySelector("body");
let input1 = document.querySelector(".color1");
let input2 = document.querySelector(".color2");
let h3 = document.querySelector("h3");
let randomColor = document.querySelector(".randomColor");

function showColor() {
  h3.innerText =
    "Left side : " + input1.value + ", " + "Right side : " + input2.value;
}
function bodyStyle() {
  body.style.backgroundImage =
    "linear-gradient(to right," + input1.value + "," + input2.value + ")";
  showColor();
}

function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function showRandomColor() {
  let randomColor1 = getRandomColor();
  let randomColor2 = getRandomColor();
  body.style.backgroundImage =
    "linear-gradient(to right," + randomColor1 + "," + randomColor2 + ")";
  h3.innerText =
    "Left side : " + randomColor1 + ", " + "Right side : " + randomColor2;
  input1.value = randomColor1;
  input2.value = randomColor2;
}

// AddEventListener area
window.addEventListener("load", showColor);
input1.addEventListener("input", bodyStyle);
input2.addEventListener("input", bodyStyle);
randomColor.addEventListener("click", showRandomColor);
