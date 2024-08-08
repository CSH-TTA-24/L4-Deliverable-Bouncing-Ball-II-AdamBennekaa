let xPos = 250;
let yPos = 250;
let xDirection = 1 
let yDirection = 1
let xSpeed;
let ySpeed;

let img;
let dvdSound;


function preload(){
  img = loadImage("/img/dvd.png") 
  dvdSound = loadSound("/sound/dvd.mp3")
}

function setup() {
  createCanvas(500, 500);
  background(0);
   imageMode(CENTER)

  // dvd = image()
  xSpeed = random(-5,5);
  ySpeed = random(-5,5);
}

function draw() {
  background(0);
  xPos += xSpeed * xDirection;
  yPos += ySpeed * yDirection;
  fill(0, 255, 0);
  if (xPos<25 || xPos > 475){
    xDirection*=-1
    dvdSound.play()
  }
  if (yPos<25 || yPos > 475){
    yDirection*=-1
    dvdSound.play()
  }
  image(img,xPos, yPos, 50, 50);
}
