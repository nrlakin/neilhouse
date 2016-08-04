var neil_X = 100;
var neil_Y = 300;
var neil_vX = 1;
var neil_vY = -2;
var ground = 360;

function drawCircle(x, y, diameter) {
  ellipse(x, y, diameter, diameter);
}

function drawBullseye(x, y, diameter, r1, g1, b1, r2, g2, b2) {
  noStroke()
  fill(r1, g1, b1);
  ellipse(x, y, diameter);
  fill(r2, g2, b2);
  ellipse(x, y, (2/3)*diameter);
  fill(r1, g1, b1);
  ellipse(x, y, (1/3)*diameter);
}

function drawNeil(x, y) {
    // white fill
    fill(255);

    // black line for stick figure
    stroke(0);

    // draw body
    line(x, y, x, y+50);

    // draw head
    drawCircle(x, y, 30);

    // left leg
    line(x, y+50, x-10, y+100);

    // right leg
    line(x, y+50, x+10, y+100);

    // arms
    line(x-20, y+25, x+20, y+25);
}

function drawHouse() {
    // draw the sky
    background(0, 0, 255);

    // draw the ground
    fill(0, 200, 0);
    // ugly; where do these #s come from?
    rect(0, 280, 640, 280);

    // draw the wall
    fill(200, 0, 0);
    rect(200, 250, 300, 200);

    // draw the roof
    triangle(200, 250, 350, 150, 500, 250);

    // draw the door
    fill(0, 0, 0);
    rect(320, 350, 50, 100);

    // draw some windows
    fill(0, 0, 255);
    rect(250, 350, 50, 50);
    rect(400, 350, 50, 50);
}

function setup() {
  createCanvas(640, 480);
  drawHouse();
}

function draw() {
  drawHouse();
  neil_X += neil_vX;
  neil_Y += neil_vY;
  if (neil_X > width) neil_vX *= -1;
  else if(neil_X < 0) neil_vX *= -1;
  if (neil_Y > ground) neil_vY *= -1;
  else if (neil_Y < 0) neil_vY *= -1;
  drawNeil(neil_X, neil_Y);
}

function mousePressed() {
  //drawNeil(mouseX, mouseY);
}
