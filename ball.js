class ball {
    constructor(x,y,width,height,angle) {
      var options = {
          restitution: 1.5,
          density: 0.1
      }
      this.body = Bodies.rectangle(x,y,width, height,options);
      this.width = width;
      this.height = height;
      this.r = 
      World.add(world, this.body);
    }
    display(){
    push();
    fill(random(0,255),random(0,255),random(0,255));
    translate(this.body.position.x,this.body.position.y);
    rotate(this.body.angle);
    ellipse(0,0,this.width,this.height);
    pop();
    }
  };
