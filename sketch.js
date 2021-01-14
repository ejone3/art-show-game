// looked at the code from my side scroller (which means I also looked at any other code that might have come from other sources but were still in the side scroller) to help me with things like how to make classes and include files in the html. I also used an rgb colour picker (just the one that pops up if you google "rgb color picker") for picking out colours. I also searched up "pixel people" in google and just looked at the trends to get an idea of how to make my people. https://techcrunch.com/2013/05/13/pixel-people-hits-700k-in-three-months-after-distributing-with-chillingo/ The picture at the top of that page and the blue business suit person on this page, https://pixelpeople.fandom.com/wiki/Lawyer are the two that I really looked at plus this person with the sash here, https://pixelpeople.fandom.com/wiki/Professions, but like I said, just the general search helped me figure it out.

var ash;

function setup() {
  createCanvas(600, 600);
  ash = new Person();
}

var pxlSize = 50;

// draws the fountain for the village
var drawFountain = function() {
  // draws the foundation of the fountain
  stroke(51, 54, 51);
  strokeWeight(4);
  fill(81, 82, 81);
  // can I use the matrix and rotation + translation to pull this off in a loop?
  rect(width/2 - pxlSize, height/2 - pxlSize * 2, pxlSize * 2, pxlSize);
  rect(width/2 - pxlSize * 2, height/2 - pxlSize, pxlSize, pxlSize * 2);
  rect(width/2 - pxlSize, height/2 + pxlSize, pxlSize * 2, pxlSize);
  rect(width/2 + pxlSize, height/2 - pxlSize, pxlSize, pxlSize * 2);
  // draws the water for the fountain
  stroke(28, 111, 166);
  fill(38, 150, 224);
  rect(width/2 - pxlSize, height/2 - pxlSize, pxlSize * 2, pxlSize * 2);
}

// draws the village, your starting area and main area
var drawVillage = function() {
  // draws grass
  background(37, 196, 61);
  // draws a tiled ground
  for(var i = 0; i < 6; i++) {
    for(var j = 0; j < 6; j++) {
        stroke(116, 122, 117);
        strokeWeight(4);
        fill(147, 153, 148);
        rect(i * pxlSize + width/4, j * pxlSize + height/4, pxlSize, pxlSize)
    }
  }
  for (var h = 0; h < 2; h++) {
    for (var k = 0; k < 4; k++) {
      rect(h * 350 + (width/4 - pxlSize), k * pxlSize + (height/4 + pxlSize), pxlSize, pxlSize)
    }
  }
  /*
    // not sure how to make this work to have the same result as before with the for loops and if statements
    var tileLayer = 0;
    if (tileLayer > 0 && tileLayer < 5) {
        for(var j = 0; j < 8; j++) {
        rect(i * pixelSize + (width/4 - 50), j * pixelSize + height/4, pixelSize, pixelSize)
        }
      } else {
        for(var k = 0; k < 6; k++) {
        stroke(77, 82, 77);
        strokeWeight(4);
        fill(103, 110, 104);
        rect(i * pixelSize + width/4, k * pixelSize + height/4, pixelSize, pixelSize)
      }
    }
  tileLayer++
  */
  // draw in the fountain
  drawFountain();
}


function draw() {
  drawVillage();
  ash.make();
}