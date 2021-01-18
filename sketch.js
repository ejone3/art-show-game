// I looked at the code from my side scroller (which means I also looked at any other code that might have come from other sources but were still in the side scroller) to help me with things like how to make classes and include files in the html. I also used an rgb colour picker (just the one that pops up if you google "rgb color picker") for picking out colours. I also searched up "pixel people" in google and just looked at the trends to get an idea of how to make my people. https://techcrunch.com/2013/05/13/pixel-people-hits-700k-in-three-months-after-distributing-with-chillingo/ The picture at the top of that page and the blue business suit person on this page, https://pixelpeople.fandom.com/wiki/Lawyer are the two that I really looked at plus this person with the sash here, https://pixelpeople.fandom.com/wiki/Professions, but like I said, just the general search helped me figure it out. I also used the p5 js web editor's reference sheet.

function setup() {
  createCanvas(600, 600);
  scene = new Scenes();
  start = new Button(250, 200, 100, 50, "Click to start");
  ash = new Person();
  robin = new Person(350, 310, color(0), color(7, 112, 65), color(255, 218, 166), color(102, 30, 45), color(49, 56, 110));
}

function keyPressed() {
  // this is all of Robin's conversations
  if (key === " " && ash.rangePerson(robin) && robin.talk === 3) {
    scene.village();
    ash.makeRight();
  } else if (key === " " && robin.talk === 2) {
    robinQuest1P2 = new TextBox("Can you get me some flowers for my")
    robinQuest1P2.extraLine("mother?");
    robinQuest1P2.show();
    robin.talk++;
  } else if (key === " " && robin.talk === 1) {
    robinQuest1 = new TextBox("Can you help me out with something?");
    robinQuest1.extraLine("");
    robinQuest1.show();
    robin.talk++;
  } else if (key === " " && robin.talk === 0) {
    robinHello = new TextBox("Hello, my name is Robin.");
    robinHello.extraLine("");
    robinHello.show();
    robin.talk++;
  }
}

// I used my side scroller to help me figure out how to make scene changes work

function mousePressed() {
  if (start.canClick) {
    scene.village();
    ash.makeRight();
  }
}

function draw() {
  if (scene.current === "start") {
    scene.start();
  }
  if (keyIsDown(UP_ARROW)) {
    ash.up();
  } else if (keyIsDown(DOWN_ARROW)) {
    ash.down();
  } else if (keyIsDown(LEFT_ARROW)) {
    ash.left();
  } else if (keyIsDown(RIGHT_ARROW)) {
    ash.right();
  }
}
