/*
365 Mini projects
4 - Project title: Color Adventure

Looking for that perfect color palette to use in most of your projects, making them look good but also unique is a rather huge quest.

Space key - to keep last values
I key - to save as image

Day 5/12/20 - 6/12/20 - hours spent -> 3

Still not finished, but it will serve it's purpose for now.
*/

function setup() {
  frameRate(1);
  createCanvas(560, 360);
  // colorMode(RGB, 100); // mostly pastels
  // colorMode(HSB, 100); // I like this better - more vivid
  // colorMode(HSL, 100); // I feel weird

  cMode = HSB;

  colorMode(cMode, 100);

  r1s = 0;
  r2s = 0;
  r3s = 0;
  r4s = 0;
  r5s = 0;

  g1s = 0;
  g2s = 0;
  g3s = 0;
  g4s = 0;
  g5s = 0;

  b1s = 0;
  b2s = 0;
  b3s = 0;
  b4s = 0;
  b5s = 0;
}

function draw() {
  background(0);

  r1 = random(0, 100);
  r2 = random(0, 100);
  r3 = random(0, 100);
  r4 = random(0, 100);
  r5 = random(0, 100);

  g1 = random(0, 100);
  g2 = random(0, 100);
  g3 = random(0, 100);
  g4 = random(0, 100);
  g5 = random(0, 100);

  b1 = random(0, 100);
  b2 = random(0, 100);
  b3 = random(0, 100);
  b4 = random(0, 100);
  b5 = random(0, 100);

  noStroke();
  fill(r1, g1, g1);
  rect(10, 10, 100, 150);
  fill(r2, g2, g2);
  rect(120, 10, 100, 150);
  fill(r3, g3, g3);
  rect(230, 10, 100, 150);
  fill(r4, g4, g4);
  rect(340, 10, 100, 150);
  fill(r5, g5, g5);
  rect(450, 10, 100, 150);

  fill(r1s, g1s, g1s);
  rect(10, 200, 25, 50);
  fill(r2s, g2s, g2s);
  rect(35, 210, 25, 50);
  fill(r3s, g3s, g3s);
  rect(60, 220, 25, 50);
  fill(r4s, g4s, g4s);
  rect(85, 230, 25, 50);
  fill(r5s, g5s, g5s);
  rect(110, 240, 25, 50);

  fill(255);
  textSize(15);
  text(round(r1) + " " + round(g1) + " " + round(b1), 10, 180);
  text(round(r2) + " " + round(g2) + " " + round(b2), 120, 180);
  text(round(r3) + " " + round(g3) + " " + round(b3), 230, 180);
  text(round(r4) + " " + round(g4) + " " + round(b4), 340, 180);
  text(round(r5) + " " + round(g5) + " " + round(b5), 450, 180);

  text(round(r1s) + " " + round(g1s) + " " + round(b1s), 145, 213);
  text(round(r2s) + " " + round(g2s) + " " + round(b2s), 155, 230);
  text(round(r3s) + " " + round(g3s) + " " + round(b3s), 165, 247);
  text(round(r4s) + " " + round(g4s) + " " + round(b4s), 175, 264);
  text(round(r5s) + " " + round(g5s) + " " + round(b5s), 185, 281);

  text(hex([r1s, g1s, b1s], 2), 315, 213);
  text(hex([r2s, g2s, b2s], 2), 325, 230);
  text(hex([r3s, g3s, b3s], 2), 335, 247);
  text(hex([r4s, g4s, b4s], 2), 345, 264);
  text(hex([r5s, g5s, b5s], 2), 355, 281);

  text(cMode, 450, 213);


  text("Looking for that perfect color palette to use in most of your projects, making them look good but also unique is a rather huge quest.", 10, 315, 550, 350);

}

function keyPressed() {
  if (keyCode === 32) {
    r1s = r1;
    r2s = r2;
    r3s = r3;
    r4s = r4;
    r5s = r5;

    g1s = g1;
    g2s = g2;
    g3s = g3;
    g4s = g4;
    g5s = g5;

    b1s = b1;
    b2s = b2;
    b3s = b3;
    b4s = b4;
    b5s = b5;

  }
  if (keyCode === 73) {
    saveCanvas('myCanvas', 'png');
  }
}

// This is glitching.world, until a next time, signin 0FF.