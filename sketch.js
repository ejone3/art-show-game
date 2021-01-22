// I looked at the code from my side scroller (which means I also looked at any other code that might have come from other sources but were still in the side scroller) to help me with things like how to make classes and include files in the html. I also used an rgb colour picker (just the one that pops up if you google "rgb color picker") for picking out colours. I also searched up "pixel people" in google and just looked at the trends to get an idea of how to make my people. https://techcrunch.com/2013/05/13/pixel-people-hits-700k-in-three-months-after-distributing-with-chillingo/ The picture at the top of that page and the blue business suit person on this page, https://pixelpeople.fandom.com/wiki/Lawyer are the two that I really looked at plus this person with the sash here, https://pixelpeople.fandom.com/wiki/Professions, but like I said, just the general search helped me figure it out. I also used the p5 js web editor's reference sheet.

var flower = false;
var shovel = false;
var robinQuests = false;

function setup() {
  createCanvas(600, 600);
  scene = new Scenes();
  start = new Button(250, 200, 100, 50, "Click to start");
  ash = new Person();
  robin = new Person(350, 310, color(0), color(7, 112, 65), color(255, 218, 166), color(102, 30, 45), color(49, 56, 110));
}

function keyPressed() {
  if (key === " ") {
    // this is all of Robin's conversations
    if (ash.rangePerson(robin)) {
      if (scene.current === "town") {
        if (robin.talk === 0) {
          robinHello = new TextBox("Hello, my name is Robin.");
          robinHello.extraLine("");
          robinHello.show();
          robin.talk++;
        } else if (robin.talk === 1) {
          robinQuest1 = new TextBox("Can you help me out with something?");
          robinQuest1.extraLine("");
          robinQuest1.show();
          robin.talk++;
        } else if (robin.talk === 2) {
          robinQuest1P2 = new TextBox("Can you get me some flowers for my")
          robinQuest1P2.extraLine("mother?");
          robinQuest1P2.show();
          robin.talk++;
        } else if (robin.talk === 3) {
          scene.village();
          ash.makeRight();
          robin.talk++;
        } else if (robin.talk === 4 && flower) {
          robinQuest1Complete = new TextBox("You did it! Thanks!");
          robinQuest1Complete.extraLine("");
          robinQuest1Complete.show();
          robin.talk++;
        } else if (robin.talk === 5) {
          scene.village();
          ash.makeRight();
          robin.talk++;
        } else if (robin.talk === 6) {
          robinQuest2 = new TextBox("You did so well last time, can you help me");
          robinQuest2.extraLine("again?");
          robinQuest2.show();
          robin.talk++;
        } else if (robin.talk === 7) {
          robinQuest2P2 = new TextBox("Here, take this shovel.");
          robinQuest2P2.extraLine("");
          robinQuest2P2.show();
          shovel = true;
          robin.talk++;
        } else if (robin.talk === 8) {
          robinQuest2P3 = new TextBox("There's a pile of rocks outside the village.");
          robinQuest2P3.extraLine("");
          robinQuest2P3.show();
          robin.talk++;
        } else if (robin.talk === 9) {
          robinQuest2P4 = new TextBox("If you dig under them, you'll find water.");
          robinQuest2P4.extraLine("");
          robinQuest2P4.show();
          robin.talk++;
        } else if (robin.talk === 10) {
          robinQuest2P5 = new TextBox("Can you please use the rocks to make a");
          robinQuest2P5.extraLine("well?");
          robinQuest2P5.show();
          robin.talk++;
        } else if (robin.talk === 11) {
          robinQuest2P6 = new TextBox("It's for the village nearby. They don't have a")
          robinQuest2P6.extraLine("clean water source.");
          robinQuest2P6.show();
          robin.talk++;
        } else if (robin.talk === 12) {
          scene.village();
          ash.makeRight();
          robin.talk++;
        } else if (robin.talk === 13 && scene.well) {
          robinQuest2Complete = new TextBox("Wow!! You made a well!!!");
          robinQuest2Complete.extraLine("");
          robinQuest2Complete.show();
          robin.talk++;
        } else if (robin.talk === 14) {
          robinQuest2CompleteP2 = new TextBox("Now the other village will have clean water!!");
          robinQuest2CompleteP2.extraLine("");
          robinQuest2CompleteP2.show();
          robin.talk++;
        } else if (robin.talk === 15) {
          robinQuest2CompleteP3 = new TextBox("I bet they're really thankful. Without the well,");
          robinQuest2CompleteP3.extraLine("they wouldn't have any water.");
          robinQuest2CompleteP3.show();
          robin.talk++;
        } else if (robin.talk === 16) {
          scene.village();
          ash.makeRight();
          robin.talk++;
          robinQuests = true;
        }
      }
    }
    if (scene.current === "fields") {
      if (ash.rangeObject(100, 300, 450, 550)) {
        flower = true;
        flowerAquired = new TextBox("You picked a flower");
        flowerAquired.extraLine("");
        flowerAquired.show();
      }
      if (shovel) {
        if (ash.rangeObject(100, 150, 50, 100)) {
          scene.well = true;
          scene.fields();
          ash.makeRight();
        }
      }
    }
  }
}

// I used my side scroller to help me figure out how to make scene changes work
function mousePressed() {
  if (start.canClick && scene.current === "start") {
    scene.village();
    ash.makeRight();
  }
}

function draw() {
  if (scene.current === "start") {
    scene.start();
  }
  if (scene.current === "town") {
    if (keyIsDown(UP_ARROW)) {
      scene.village();
      ash.up();
    } else if (keyIsDown(DOWN_ARROW)) {
      scene.village();
      ash.down();
    } else if (keyIsDown(LEFT_ARROW)) {
      scene.village();
      ash.left();
    } else if (keyIsDown(RIGHT_ARROW)) {
      scene.village();
      ash.right();
    }
    if (ash.rangeEdgeBottom(50, 600)) {
      scene.fields();
      ash.y = 10;
      ash.makeRight();
    }
  }

  if (scene.current === "fields") {
    if (keyIsDown(UP_ARROW)) {
      scene.fields();
      ash.up();
    } else if (keyIsDown(DOWN_ARROW)) {
      scene.fields();
      ash.down();
    } else if (keyIsDown(LEFT_ARROW)) {
      scene.fields();
      ash.left();
    } else if (keyIsDown(RIGHT_ARROW)) {
      scene.fields();
      ash.right();
    }
    if (ash.rangeEdgeTop(50, 0)) {
      scene.village();
      ash.y = 530;
      ash.makeRight();
    }
  }

  // this checks if all the quests are complete
  if (robinQuests) {
    scene.win();
  }
}
