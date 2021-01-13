class Person {
  constructor(x, y, hair, eye, skin, top, bottom) {
    this.pxl = 10;
    this.x = x || 20;
    this.y = y || 100;
    // all of these are meant to be colours
    this.hair = hair || color(92, 49, 46);
    this.eye = eye;
    this.skin = skin || color(194, 165, 87);
    this.top = top || color(46, 63, 92);
    this.bottom = bottom;
  }

  // draws a character
  make() {
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
  }
}
