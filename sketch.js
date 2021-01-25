// I looked at the code from my side scroller (which means I also looked at any other code that might have come from other sources but were still in the side scroller) to help me with things like how to make classes and include files in the html. I also used an rgb colour picker (just the one that pops up if you google "rgb color picker") for picking out colours. I also searched up "pixel people" in google and just looked at the trends to get an idea of how to make my people. https://techcrunch.com/2013/05/13/pixel-people-hits-700k-in-three-months-after-distributing-with-chillingo/ The picture at the top of that page and the blue business suit person on this page, https://pixelpeople.fandom.com/wiki/Lawyer are the two that I really looked at plus this person with the sash here, https://pixelpeople.fandom.com/wiki/Professions, but like I said, just the general search helped me figure it out. I also used the p5 js web editor's reference sheet.

var flower = false;
var shovel = false;
var janineSearch = false;
var ring = false;
var robinQuests = false;
var ruby = false;
var inMap = 0;

function setup() {
  createCanvas(600, 600);
  scene = new Scenes();
  start = new Button(250, 200, 100, 50, "Click to start", color(192, 250, 217));
  hasMap = new Button(10, 10, 50, 50, "MAP", color(241, 255, 171));
  village = new Button(80, 55, 230, 245, "", color(224, 213, 166));
  mine = new Button(430, 230, 140, 130, "", color(224, 213, 166));
  ash = new Person();
  robin = new Person(350, 310, color(0), color(7, 112, 65), color(255, 218, 166), color(102, 30, 45), color(49, 56, 110));
  janine = new Person(510, 30, color(140, 214, 101), color(86, 116, 199), color(245, 230, 171), color(102, 79, 125), color(44, 54, 26));
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
        } else if (robin.talk === 17) {
          robinQuest3P1 = new TextBox("You've really been helping me out in this")
          robinQuest3P1.extraLine("past little bit.");
          robinQuest3P1.show();
          robin.talk++;
        } else if (robin.talk === 18) {
          robinQuest3P2 = new TextBox("I have one more favor to ask of you.");
          robinQuest3P2.extraLine("");
          robinQuest3P2.show();
          robin.talk++;
        } else if (robin.talk === 19) {
          robinQuest3P3 = new TextBox("Can you get me a ruby from the mines?");
          robinQuest3P3.extraLine("");
          robinQuest3P3.show();
          robin.talk++;
        } else if (robin.talk === 20) {
          robinQuest3P4 = new TextBox("You'll need a map to get there. I think Janine");
          robinQuest3P4.extraLine("has one.");
          robinQuest3P4.show();
          robin.talk++;
        } else if (robin.talk === 21) {
          scene.village();
          ash.makeRight();
          robin.talk++;
        } else if (robin.talk === 22 && ruby) {
          robinQuest3CompleteP1 = new TextBox("Amazing!! Thank you so much!!");
          robinQuest3CompleteP1.extraLine("");
          robinQuest3CompleteP1.show();
          robin.talk++;
        } else if (robin.talk === 23) {
          robinQuest3CompleteP2 = new TextBox("You've given me all the help I need! Thanks");
          robinQuest3CompleteP2.extraLine("again!");
          robinQuest3CompleteP2.show();
          robin.talk++;
        } else if (robin.talk === 24) {
          robinQuests = true;
        }
      }
    }
    if (scene.current === "fields") {
      if (ash.rangeObject(100, 300, 450, 550)) {
        if (janineSearch && !ring) {
          ring = true;
          ringAquired = new TextBox("You found Janine's ring!");
          ringAquired.extraLine("");
          ringAquired.show();
        } else {
          flower = true;
          flowerAquired = new TextBox("You picked a flower");
          flowerAquired.extraLine("");
          flowerAquired.show();
        }
      }
      if (shovel) {
        if (ash.rangeObject(100, 150, 50, 100)) {
          scene.well = true;
          scene.fields();
          ash.makeRight();
        }
      }
    }
    if (scene.current === "shop") {
      if (ash.rangePerson(janine)) {
        if (janine.talk === 0) {
          janineHello = new TextBox("Hey! I'm Janine, the owner of this shop.");
          janineHello.extraLine("");
          janineHello.show();
          janine.talk++;
        } else if (janine.talk === 1) {
          janineQuest1P1 = new TextBox("You seem good at looking, can you help me");
          janineQuest1P1.extraLine("out with something?");
          janineQuest1P1.show();
          janine.talk++;
        } else if (janine.talk === 2) {
          janineQuest1P2 = new TextBox("I'm looking for my ring.");
          janineQuest1P2.extraLine("");
          janineQuest1P2.show();
          janine.talk++;
        } else if (janine.talk === 3) {
          janineQuest1P3 = new TextBox("I was looking at flowers earlier and now my")
          janineQuest1P3.extraLine("ring is gone.");
          janineQuest1P3.show();
          janine.talk++;
        } else if (janine.talk === 4) {
          janineQuest1P4 = new TextBox("Can you find it for me?");
          janineQuest1P4.extraLine("");
          janineQuest1P4.show();
          janineSearch = true;
          janine.talk++;
        } else if (janine.talk === 5) {
          scene.shop();
          ash.makeRight();
          janine.talk++;
        } else if (janine.talk === 6) {
          janineQuest1Complete = new TextBox("Wow! You found my ring! Thank you so");
          janineQuest1Complete.extraLine("much!");
          janineQuest1Complete.show();
          janine.talk++;
        } else if (janine.talk === 7) {
          janineGiveMap = new TextBox("Since you found my ring, I want to give you")
          janineGiveMap.extraLine("this.");
          janineGiveMap.show();
          janine.talk++;
        } else if (janine.talk === 8) {
          mapAquired = new TextBox("You got a map!");
          mapAquired.extraLine("");
          mapAquired.show();
          ash.map = true;
          janine.talk++;
        } else if (janine.talk === 9) {
          janineMap = new TextBox("It's a map so that you can travel to new");
          janineMap.extraLine("places.");
          janineMap.show();
          janine.talk++;
        } else if (janine.talk === 10) {
          scene.shop();
          ash.makeRight();
          janine.talk++;
        }
      }
    }
    if (scene.current === "mines") {
      if (ash.rangeObject(465, 510, 375, 432)) {
        ruby = true;
        scene.mines();
        ash.makeRight();
      }
    }
  }
}

// I used my side scroller to help me figure out how to make scene changes work
function mouseReleased() {
  if (scene.current === "start") {
    if (start.canClick) {
      scene.village();
      ash.makeRight();
    }
  }
  if (hasMap.canClick && ash.map && inMap === 0) {
    scene.map();
  }
  if (scene.current === "map") {
    if (inMap === 1) {
      if (village.canClick) {
        inMap = 0;
        scene.village();
        ash.x = 90;
        ash.y = 100;
        ash.makeRight();
      } else if (mine.canClick) {
        inMap = 0;
        scene.mines();
        ash.x = 90;
        ash.y = 500;
        ash.makeRight();
      }
    } else {
      inMap++;
    }
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
    if (ash.rangeEdgeRight(600, 50)) {
      scene.shop();
      ash.x = 20;
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

  if (scene.current === "shop") {
    if (keyIsDown(UP_ARROW)) {
      scene.shop();
      ash.up();
    } else if (keyIsDown(DOWN_ARROW)) {
      scene.shop();
      ash.down();
    } else if (keyIsDown(LEFT_ARROW)) {
      scene.shop();
      ash.left();
    } else if (keyIsDown(RIGHT_ARROW)) {
      scene.shop();
      ash.right();
    }
    if (ash.rangeEdgeLeft(0, 50)) {
      scene.village();
      ash.x = 530;
      ash.makeRight();
    }
  }

  if (scene.current === "mines") {
    if (keyIsDown(UP_ARROW)) {
      scene.mines();
      ash.up();
    } else if (keyIsDown(DOWN_ARROW)) {
      scene.mines();
      ash.down();
    } else if (keyIsDown(LEFT_ARROW)) {
      scene.mines();
      ash.left();
    } else if (keyIsDown(RIGHT_ARROW)) {
      scene.mines();
      ash.right();
    }
  }

  // this checks if all the quests are complete
  if (robinQuests) {
    scene.win();
  }
}
