var backImg;



function setup() {
  createCanvas (800,600);
  backImg = loadImage("assets/mona.jpg");
  frameRate();
  
  

}

function draw() {

  
  background(backImg);

  copy(backImg, mouseX, mouseY, 50, 30, mouseX, mouseY, 80,60 );
  noStroke;
  noFill();


  
}


  
 


  


  
  
  

  
 



