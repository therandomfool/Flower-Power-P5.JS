let cenSize = 20;
let petSize = 20;
let petNum = 6;

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  background(200,200,200);
}

function draw() {
  let x = [random(255), random(255), random(255)];
  let y = [random(255), random(255), random(255)];
  let z = [random(255), random(255), random(255)];
  xPos = random(width);
  yPos = random(height);
  
  flower(x,y,z, xPos, yPos);

}

function flower(x, y , z, xPos, yPos){
  push();
  translate(xPos, yPos);
  fill(x);
 
  circle(0,0, cenSize);

    // petals
    for (let i=0; i < petNum; i++){
      angle=60;
      rotate(angle);
      stroke(y);
      fill(z);
      circle(20,0,petSize);
    }
    pop();

}
