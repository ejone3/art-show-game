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
  path(x, y) {
    stroke(116, 122, 117);
    strokeWeight(4);
    fill(147, 153, 148);
    for (let i = 0; i < 2; i++) {
      for (let j = 0; j < 2; j++) {
        rect(x - this.pxl * i, y + this.pxl * j, this.pxl, this.pxl);
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

    // draws paths
    this.path(width/2, 500);
    this.path(550, 250);

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
    this.path(width/2, 0);
    
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
  
  // this draws a 3 block long vertical shelf
  vShelf(x, y) {
    noStroke();
    for (let i = 0; i < 3; i++) {
      fill(51, 32, 0);
      rect(x, y + this.pxl * i, this.pxl, this.pxl);
    }
  }
  
  // this draws a 3 block long horizontal shelf
  hShelf(x, y) {
    noStroke();
    for (let i = 0; i < 3; i++) {
      rect(x + this.pxl * i, y, this.pxl, this.pxl);
    }
  }
  
  // this draws a welcome mat
  mat(x, y) {
    stroke(153, 34, 2);
    strokeWeight(4);
    fill(181, 41, 2)
    rect(x, y, this.pxl, this.pxl * 2, 2);
  }
  
  // this draws a shop
  shop() {
    // this sets the current scene to "shop"
    this.current = "shop";
    
    // this draws the floor
    background(148, 82, 52);
    
    //this draws the shelves
    for (let i = 0; i < 4; i++) {
      this.vShelf(50 + this.pxl * 3 * i, 400);
    }
    
    for (let i = 0; i < 2; i++) {
      this.hShelf(25 + this.pxl * 4 * i, 0);
    }
    
    // this draws the welcome mat
    this.mat(2, height/2 - this.pxl);
    
    // this draws a counter
    stroke(191, 179, 157);
    strokeWeight(4);
    for (let i = 0; i < 4; i++) {
      fill(204, 191, 169);
      rect(400 + this.pxl * i, 125, this.pxl, this.pxl);
    }
    
    // this makes Janine
    janine.makeRight();
  }
  
  miniHouse(x, y) {
    stroke(0);
    strokeWeight(2);
    fill(92, 91, 89);
    rect(x, y, this.pxl, this.pxl);
    fill (156, 139, 73);
    triangle(x, y, x + this.pxl, y, x + this.pxl/2, y - this.pxl/2);
  }
  
  // this draws a map
  map() {
    // this sets the current scene to "map"
    this.current = "map";
    
    // this draws the map background
    background(224, 213, 166);
    
    // this draws the icon that serves as the village
    this.miniHouse(100, 100);
    this.miniHouse(160, 115);
    this.miniHouse(130, 140);
    fill(0);
    textAlign(CENTER);
    textSize(20);
    noStroke();
    text("Village", 155, 215);
    
    // this draws the icon that seves as the caves
    // I got help from Mr. Osudar and Sebastian Widecki to figure out how to make the arcs into semi circles
    angleMode(DEGREES);
    noStroke();
    fill(94, 94, 92);
    arc(500, 300, 100, 100, 180, 0);
    fill(0);
    arc(500, 300, 70, 70, 180, 0);
    textAlign(CENTER);
    textSize(20);
    text("Mines", 500, 330);
  }
  
  // draws a ruby
  ruby(x, y) {
    noStroke();
    fill(77, 75, 75);
    ellipse(x + 35/2, y + 17, 40, 20);
    stroke(204, 36, 20);
    strokeWeight(2);
    fill(255, 45, 45);
    rect(x + 20, y - 20, 10, 25, 2);
    rect(x, y, 35, 10, 2);
  }
  
  // this draws the mines
  mines() {
    // this sets the current scene to "mines"
    this.current = "mines";
    
    //this draws the background
    background(140, 140, 137);
    
    // this draws a ruby or not
    if (!ruby) {
      this.ruby(470, 400);
    } else {
      return false
    }
    
  }
  
  // this draws a win screen
  win() {
    background(142, 245, 175);
    textAlign(CENTER);
    textSize(30);
    fill(255);
    text("CONGRATS!! YOU FINISHED THE GAME!!", width / 2, 100);
    textSize(13);
    text("You've helped out the small village of Bayleay and the surrounding areas a lot.", width / 2, 300);
    text("Everyone you helped is extremely grateful to you and hopes that you won't forget them.", width / 2, 320);
    text("They told me to tell you that you're welcome back anytime!!", width / 2, 340);
    text("Also, Ash was worried about doing this alone. So they were really happy when you came to help.", width / 2, 450);
    text("Thank you for joining Ash in their adventure!!", width / 2, 470);
    ash.x = 275;
    ash.y = 150;
    ash.makeRight();
    robin.x = 215;
    robin.y = 160;
    robin.makeRight();
    janine.x = 335;
    janine.y = 160;
    janine.makeRight();
  }
}
