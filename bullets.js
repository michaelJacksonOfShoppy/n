class HollowBall{
    constructor(x, y) {
      var options = {
        isStatic: true
      };
      this.r = 30;
      this.body = Bodies.circle(x, y, this.r, options);
      this.image = loadImage("./assets/I0_sprite_1.png");
      World.add(world, this.body);
    }
  
  
    display() 
    {
      var pos = this.body.position;
      push();
      imageMode(CENTER);
      image(this.image, pos.x, pos.y, this.r, this.r);
      pop();
    }
    shoot (){
      var newAngle = mao.angle - 28;
      var velocity = p5.Vector.fromAngle(radians(newAngle));
      velocity.mult(100);
      Matter.Body.setStatic(this.body, false);
      Matter.Body.setVelocity(this.body, {
          x: velocity.x, 
          y: velocity.y 
      });
    }
  } 