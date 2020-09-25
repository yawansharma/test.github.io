var canvas = document.querySelector("canvas");
const red = document.querySelector("#red");
const blue = document.querySelector("#blue");
const green = document.querySelector("#green");
const yellow = document.querySelector("#yellow");
const brown = document.querySelector("#brown");
const pink = document.querySelector("#pink");
const black = document.querySelector("#black");
const eraser = document.querySelector("#eraser");
const width = document.querySelector(".width");
const thisColor = red || blue || green || yellow;

canvas.width = 1080;
canvas.height = 520;

var c = canvas.getContext("2d");

window.addEventListener("resize", () => {
  canvas.width = 1080;
  canvas.height = 520;
});

let painting = false;

function startpos(e) {
  painting = true;
  draw(e);
}

function endpos() {
  painting = false;
  c.beginPath();
}

function draw(e) {
  if (!painting) return;
  c.lineWidth = width.value;
  c.lineCap = "round";
  c.lineTo(e.clientX - 150, e.clientY - 50);
  c.strokeStyle = "";
  c.stroke();
  c.beginPath();
  c.moveTo(e.clientX - 150, e.clientY - 50);
}
canvas.addEventListener("mousedown", startpos);
canvas.addEventListener("mouseup", endpos);
canvas.addEventListener("mousemove", draw);

window.onload = function clear() {
  const clear = document.querySelector(".clear");
  function clearCanvas() {
    c.clearRect(0, 0, canvas.width, canvas.height);
    clear.addEventListener("click", clearCanvas);
  }
  clear.addEventListener("click", clearCanvas);
};

function change(e) {
  c.beginPath(e);
  c.lineWidth = width.value;
  c.lineCap = "round";

  c.strokeStyle = "red";
  c.stroke();
  c.beginPath();
}
red.addEventListener("click", change);

function changeTwo(e) {
  c.beginPath(e);
  c.lineWidth = width.value;
  c.lineCap = "round";

  c.strokeStyle = "blue";
  c.stroke();
  c.beginPath();
}
blue.addEventListener("click", changeTwo);

function changeThree(e) {
  c.beginPath(e);
  c.lineWidth = width.value;
  c.lineCap = "round";

  c.strokeStyle = "green";
  c.stroke();
  c.beginPath();
}
green.addEventListener("click", changeThree);

function changeFour(e) {
  c.beginPath(e);
  c.lineWidth = width.value;
  c.lineCap = "round";

  c.strokeStyle = "yellow";
  c.stroke();
  c.beginPath();
}
yellow.addEventListener("click", changeFour);

function changeFive(e) {
  c.beginPath(e);
  c.lineWidth = width.value;
  c.lineCap = "round";

  c.strokeStyle = "brown";
  c.stroke();
  c.beginPath();
}
brown.addEventListener("click", changeFive);

function changeSix(e) {
  c.beginPath(e);
  c.lineWidth = width.value;
  c.lineCap = "round";

  c.strokeStyle = "black";
  c.stroke();
  c.beginPath();
}
black.addEventListener("click", changeSix);

function changeSeven(e) {
  c.beginPath(e);
  c.lineWidth = width.value;
  c.lineCap = "round";

  c.strokeStyle = "pink";
  c.stroke();
  c.beginPath();
}
pink.addEventListener("click", changeSeven);

function changeEi(e) {
  c.beginPath(e);
  c.lineWidth = width.value || 50;
  c.lineCap = "round";

  c.strokeStyle = "white";
  c.stroke();
  c.beginPath();
}
eraser.addEventListener("click", changeEi);
