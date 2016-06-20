//Create eyes which operate independently of each other and jellyfish body

function eye(tempX, tempY, tempRotSpeed){


this.x = tempX;
this.y = tempY;
this.rotSpeed = tempRotSpeed;

this.rot = 0;
this.xDir = random (-1,1);
this.yDir = random (-1,1);



  
}

  this.render = function(){
  
    push();
    translate(this.x, this.y);
    rotate(this.rot);
    ellipseMode(CORNERS);//eyeball
    ellipse(0, 0, 5, 70);
    fill(0,100,255);
    ellipseMode(CORNER);//iris
    ellipse(0,0,15,15);//end eyeball
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

