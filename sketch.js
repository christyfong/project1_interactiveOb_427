let lastBackgroundColorChange = 0;
let bgColorChangeInterval = 10; // Change background color every 60 frames (1 seconds at 60fps)

let armAngle = 0;

let avatar2;

let s = 'HAPPY SPOOKY SEASON!!!';
let o = 'press the "s" and "d" key consecutively to make the skeleton dance'


function preload(){
  avatar2 = loadImage("avatar2.png");

}

function setup() {
  createCanvas(500, 500);
  background("rgb(249,194,94)");

  
}

function draw() {


 image(avatar2, 15,430, 50,50);


  translate(width / 2, height / 2);
  
 textSize(32); 
fill("black");
  textFont("Pixelify");
text(s, -215, -190);

textSize(14);
fill("black")
text(o, -185,210);

  //stick figure body
  fill("white");
  strokeWeight(0);
  square(-25,-95,50)
  circle(0,-80, 60) //Head
  
  strokeWeight(0)
  fill("black");
  circle(12,-85,9); //left eye
  fill("red");
  circle(-11,-85,13); //right eye
  
  
  strokeWeight(3)
  fill("black");
line(0, -70, 0, -45); // middle mouth piece
line(-12, -70, -12, -45); // left mouth piece
line(13, -70, 13, -45); // right mouth piece  
  

  strokeWeight(5)
  line(0, -30, 0, 100); // Body
  //line(-30, -50, 30, -50); // Arms
  line(0, 100, -30, 150); // Left leg
  line(0, 100, 30, 150); // Right leg



  // "armAngle" Push and Pop function 
  push();
  rotate(radians(armAngle));

  // moving arms
  //line(0, -50, -30, -100); // Left arm
  //line(0, -50, 30, -100); // Right arm
  line(45,-50, 70, -100); //right 2
  line(-70, -100, -40, -45); //left 2
  //line(60, -100, 0, -100)
  
  pop();
  
  // Check if it's time to change the background color
  if (frameCount - lastBackgroundColorChange >= bgColorChangeInterval) {
    background(random(255), random(255), random(255));
    lastBackgroundColorChange = frameCount;
  }
}


function keyPressed() {
  if (key === 's' || key === 'S') {
    // Pressing 'S' key - move arms up
    armAngle -= 10;
  } else if (key === 'd' || key === 'D') {
    // Pressing 'D' key - move arms down
    armAngle += 10;
  }
}
