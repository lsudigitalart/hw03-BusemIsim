//let randomGrey;
//let randomColorR;
//let randomColorG;
//let randomColorB;

//function setup() {

    //createCanvas(400, 400);
    //randomGrey = random(255);
    //randomColorR = (0,255);
   // randomColorG = (0,255);
   // randomColorB = (0);

//}

//function draw () {
  //  background(randomColorR, randomColorG, randomColorB);
//}

function setup() {
  createCanvas(400, 400);
  background(255);

  noStroke();

    for (let x = 5; x <= width; x += 10) {
    for (let y = 5; y <= height; y += 10) {
        fill(random(255), random(255), random(255));
    rect(x, y, 50, 50);
      line(0, y + frameCount % 20, width, y + frameCount % 20);
  }
}
}
