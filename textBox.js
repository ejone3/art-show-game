class TextBox {
  constructor(message) {
    this.x = 100;
    this.y = 200;
    this.width = 400;
    this.height = 200;
    this.message = message;
  }
  
  extraLine(message2) {
    this.message2 = message2;
  }
  
  show() {
    fill(255, 56, 56);
    rect(this.x - 20, this.y - 20, this.width + 40, this.height + 40, 20);
    fill(255, 253, 196);
    rect(this.x, this.y, this.width, this.height, 20);
    textSize(20);
    textAlign(CENTER);
    fill(0);
    text(this.message, this.x + this.width/2, this.y + this.height/1.7);
    text(this.message2, this.x + this.width/2, this.y + this.height/1.4);
  }
}

class CollectionBox extends TextBox {
  constructor(message) {
    super(message);
  }
  
  show() {
    fill(56, 76, 255);
    rect(this.x - 20, this.y - 20, this.width + 40, this.height + 40, 20);
    fill(255, 253, 196);
    rect(this.x, this.y, this.width, this.height, 20);
    textSize(20);
    textAlign(CENTER);
    fill(0);
    text(this.message, this.x + this.width/2, this.y + this.height/1.7);
    text(this.message2, this.x + this.width/2, this.y + this.height/1.4);
  }
}
