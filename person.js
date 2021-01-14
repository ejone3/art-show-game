class Person {
  constructor(x, y, hair, eye, skin, top, bottom) {
    this.pxl = 10;
    this.x = x || 20;
    this.y = y || 100;
    this.speed = 3;
    this.touching = false;
    // all of these are meant to be colours
    this.hair = hair || color(92, 49, 46);
    this.eyes = eye || color(0);
    this.skin = skin || color(212, 176, 110);
    this.top = top || color(46, 63, 92);
    this.bottom = bottom || color(48, 84, 62);
  }

  // draws a character facing right
  makeRight() {
    noStroke();
    fill(this.hair);
    // draws the first layer of the person
    for (let i = 1; i < 4; i++) {
      rect(this.x + this.pxl * i, this.y - this.pxl, this.pxl, this.pxl);
    }
    // second layer (the leftmost block on this layer is the block that is at this.x and this.y)
    for (let i = 0; i < 5; i++) {
      rect(this.x + this.pxl * i, this.y, this.pxl, this.pxl);
    }
    // third layer
    for (let i = 0; i < 3; i++) {
      rect(this.x + this.pxl * i, this.y + this.pxl, this.pxl, this.pxl);
    }
    for (let i = 3; i < 5; i++) {
      fill(this.skin);
      rect(this.x + this.pxl * i, this.y + this.pxl, this.pxl, this.pxl);
    }
    // fourth layer
    for (let i = 0; i < 2; i++) {
      fill(this.hair);
      rect(this.x + this.pxl * i, this.y + this.pxl * 2, this.pxl, this.pxl);
    }
    for (let i = 2; i < 5; i++) {
      fill(this.skin);
      rect(this.x + this.pxl * i, this.y + this.pxl * 2, this.pxl, this.pxl);
    }
    // draws the neck
    rect(this.x + this.pxl * 2, this.y + this.pxl * 3, this.pxl, this.pxl);

    //draws the sixth and seventh layer
    for (let j = 4; j < 6; j++) {
      for (let i = 0; i < 5; i++) {
        fill(this.top);
        rect(this.x + this.pxl * i, this.y + this.pxl * j, this.pxl, this.pxl);
      }
    }
    // draws the eighth layer
    for (let i = 0; i < 2; i++) {
      rect(this.x + this.pxl * (i * 4), this.y + this.pxl * 6, this.pxl, this.pxl);
    }
    for (let i = 1; i < 4; i++) {
      fill (this.bottom);
      rect(this.x + this.pxl * i, this.y + this.pxl * 6, this.pxl, this.pxl);
    }
    // draw the ninth and tenth layer
    for (let j = 7; j < 9; j++) {
      for (let i = 0; i < 2; i++) {
        rect(this.x + this.pxl + (this.pxl * i * 2), this.y + this.pxl * j, this.pxl, this.pxl);
      }
    }
    
    // draws the eyes
    fill(this.eyes);
    rect(this.x + this.pxl * 3.5, this.y + this.pxl * 1.5, this.pxl/2, this. pxl);
    rect(this.x + this.pxl * 4.3, this.y + this.pxl * 1.5, this.pxl/2, this. pxl);
  }
  
  // moves character up by one pixel
  up() {
    this.y -= this.speed;
  }
  
  // moves character down one pixel
  down(){
    this.y += this.speed;
  }
  
  // moves character left one pixel
  left() {
    this.x -= this.speed;
  }
  
  // moves character right one pixel
  right() {
    this.x += this.speed;
  }
  
  // checks if the person is in range of something
  range(other, otherHeight, otherWidth) {
    if (this.x > other.x && this.x < other.x + otherHeight && this.y > other.y && this.y < other.y + otherWidth) {
     this.touching = true;
   }
 }
}
