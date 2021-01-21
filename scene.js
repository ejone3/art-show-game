class Scenes {
  constructor() {
    this.pxl = 50;
    this.smlPxl = 10;
    this.current = "start";
    this.well = false;
  }

  // draws the start screen
  start() {
    this.current = "start"
    background(215, 192, 250);
    textSize(50);
    textAlign(CENTER);
    fill(255);
    text("Ash's Quest", width / 2, 150);
    // draws the start button
    start.show();
  }

  // draws the fountain for the village
  fountain() {
    // draws the foundation of the fountain
    stroke(51, 54, 51);
    strokeWeight(4);
    fill(81, 82, 81);
    // can I use the matrix and rotation + translation to pull this off in a loop?
    rect(width / 2 - this.pxl, height / 2 - this.pxl * 2, this.pxl * 2, this.pxl);
    rect(width / 2 - this.pxl * 2, height / 2 - this.pxl, this.pxl, this.pxl * 2);
    rect(width / 2 - this.pxl, height / 2 + this.pxl, this.pxl * 2, this.pxl);
    rect(width / 2 + this.pxl, height / 2 - this.pxl, this.pxl, this.pxl * 2);
    // draws the water for the fountain
    stroke(28, 111, 166);
    fill(38, 150, 224);
    rect(width / 2 - this.pxl, height / 2 - this.pxl, this.pxl * 2, this.pxl * 2);
  }


  // draws a 2x2 path
  path(beginning) {
    stroke(116, 122, 117);
    strokeWeight(4);
    fill(147, 153, 148);
    for (let i = 0; i < 2; i++) {
      for (let j = 0; j < 2; j++) {
        rect(width/2 - this.pxl * i, beginning + this.pxl * j, this.pxl, this.pxl);
      }
    }
  }

  // draws the village, your starting area and main area
  village() {
    // sets "this.current" to town
    this.current = "town";
    // draws grass
    background(37, 196, 61);
    // draws a tiled ground
    for (var i = 0; i < 6; i++) {
      for (var j = 0; j < 6; j++) {
        stroke(116, 122, 117);
        strokeWeight(4);
        fill(147, 153, 148);
        rect(i * this.pxl + width / 4, j * this.pxl + height / 4, this.pxl, this.pxl)
      }
    }
    for (var h = 0; h < 2; h++) {
      for (var k = 0; k < 4; k++) {
        rect(h * 350 + (width / 4 - this.pxl), k * this.pxl + (height / 4 + this.pxl), this.pxl, this.pxl)
      }
    }

    // draws a path
    this.path(500);

    // draws a fountain
    this.fountain();

    //draws Robin
    robin.makeRight();
  }

  // this draws a flower
  flower(x, y) {
    // flower petals
    noStroke();
    fill(187, 127, 250);
    ellipse(x - 5, y - 5, 15, 15);
    ellipse(x + 5, y - 5, 15, 15);
    ellipse(x - 5, y + 5, 15, 15);
    ellipse(x + 5, y + 5, 15, 15);
    // center of the flower
    fill(237, 237, 116);
    ellipse(x, y, 10, 10);
  }
  
  // this draws a pile of rocks
  rocks() {
    stroke(116, 122, 117);
    strokeWeight(2);
    fill(147, 153, 148);
    for (let i = 0; i < 5; i++) {
      for (let j = 0; j < 5; j++) {
        ellipse(this.smlPxl * i + 105, this.smlPxl * j + 55, this.smlPxl, this.smlPxl);
      }
    }
    ellipse(110, 60, this.smlPxl * 1.5, this.smlPxl);
    ellipse(120, 90, this.smlPxl * 1.5, this.smlPxl);
    ellipse(125, 75, this.smlPxl * 1.5, this.smlPxl);
    ellipse(137, 65, this.smlPxl * 1.5, this.smlPxl);
    ellipse(115, 70, this.smlPxl * 1.5, this.smlPxl);
    ellipse(138, 87, this.smlPxl * 1.5, this.smlPxl);
  }
  
  // this draws a well
  makeWell() {
    stroke(116, 122, 117);
    strokeWeight(2);
    fill(147, 153, 148);
    ellipse(125, 75, this.pxl, this.pxl);
    fill(0, 0, 255);
    ellipse(125, 75, this.pxl - 10, this.pxl - 10);
  }
  
  // draws the fields outside the village
  fields() {
    // sets "this.current" to fields
    this.current = "fields";
    // draws the grass
    background(104, 227, 64);
    
    // draws a path
    this.path(0);
    
    // draws a pile of rocks or a well
    if (this.well) {
      this.makeWell();
    } else {
      this.rocks();
    }

    // this draws a flower patch
    for (let i = 0; i < 200; i += 25) {
      for (let j = 0; j < 100; j += 20) {
        this.flower(i + 100, j + 450);
      }
    }
  }
}
