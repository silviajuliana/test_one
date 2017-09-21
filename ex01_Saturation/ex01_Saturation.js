/*
 * @name Saturation
 * @description Saturation is the strength or purity of the color and 
 * represents the amount of gray in proportion to the hue. A "saturated" 
 * color is pure and an "unsaturated" color has a large percentage of gray. 
 * Move the cursor vertically over each bar to alter its saturation.
 */
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