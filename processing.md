## Test en processing

var barWidth = 20;
var lastBar = -1;

function setup() {
  createCanvas(800, 500);
  colorMode(HSB, width, height, 50);
  noStroke();
}

function draw() {
  var whichBar = mouseX / barWidth;
  if (whichBar != lastBar) {
    var barX = whichBar * barWidth;
    fill(barX, mouseY, 80);
    rect(barX, 0, barWidth, height);
    lastBar = whichBar;
  }
}
