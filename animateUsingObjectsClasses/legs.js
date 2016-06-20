//Create legs which operate independently of each other and jellyfish body

function legs(){

this.x = xPos;
this.y = yPos;
this.speed = 1;



  
}

  this.render = function(){  //Leg shape
  
  push();
  translate(xPos, yPos);
  noFill(); 
  stroke(220, 102, 182);
  strokeWeight(7);
  // intial legs coordinates   bezier(285, 203, 280, 218, 295, 248, 280, 258);
  bezier(xPos-65, yPos+3, xPos-90, yPos+10, xPos-35, yPos+40, xPos-51, yPos+48);//leg locations relative to xPos, yPos
  bezier(xPos-35, yPos+3, xPos-10, yPos+25, xPos-55, yPos+30, xPos-30, yPos+48);
  bezier(xPos+65, yPos+3, xPos+30, yPos+10, xPos+71, yPos+40, xPos+55, yPos+48);
  bezier(xPos+35, yPos+3, xPos+10, yPos+25, xPos+55, yPos+30, xPos+30, yPos+48);
  bezier(xPos, yPos+6, xPos-15, yPos+7, xPos+15, yPos+25, xPos-1, yPos+44);
  pop();

}

  this.update = function(){ //speed and direction of iris rolling in eyeball is defined
    
    this.x += this.xDir;
    this.y += this.yDir;
    
    this.rot +=this.rotSpeed;
    
  }

  this.roll = function(){ //iris rolls within eyeball
    
    if (this.x > width || this.x <0){
      this.xDir *= -1;
      
    }
    
    if (this.y > height || this.y <0){
      this.yDir *=-1;
      
    }
  }
