class Button {
  constructor(x, y, width, height, message) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.message = message;
  }
  
  show() {
    noStroke();
    fill(192, 250, 217);
    rect(this.x, this.y, this.width, this.height, 10);
    textAlign(CENTER);
    textSize(15);
    fill(0);
    text(this.message, this.x + this.width/2, this.y + this.height/1.7);
  }
  
  canClick() {
    if (mouseX >= this.x && mouseX <= (this.x + this.width) && mouseY >= this.y && mouseY <= (this.y + this.height)) {
      return true;
    } else {
      return false;
    }
  }
}
