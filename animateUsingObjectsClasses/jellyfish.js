//Jellyfish class


var jellyfish (tempX, tempY, tempWobble){
  this.x = tempX;
  this.y = tempY;
  this.Wobble = tempWobble;
  
  this.Wobble = 0;


  
}

this.render=function (){
  
  push();
  translate(xPos, yPos);

  noStroke();

  fill(200,100,120);
  ellipseMode(RADIUS);
  arc(xPos,yPos,80,80,PI, TWO_PI,CHORD);
  stroke(5);
  fill(255);

  fill(250,150,155);//lips begin
  noStroke();
  ellipseMode(CENTER);
  ellipse(xPos, yPos-19,40,45);//lips end
  
  fill(60)//mouth begin
  noStroke();
  ellipseMode(CENTER);
  ellipse(xPos, yPos-19,37,25);//mouth end
  pop();
  
}

this.wobble=function(){
  
  
  
}


