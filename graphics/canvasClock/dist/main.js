//part1 : create the canvas

var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext("2d");
var radius = canvas.height / 2;
ctx.translate(radius,radius);
radius = radius * 0.90
drawClock();

function drawClock() {
    ctx.arc(0,0,radius,0,2 * Math.PI);
    ctx.fillStyle = "white";
    ctx.fill();
}