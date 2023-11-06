class Mao {
  constructor(x, y, width, height, angle) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.angle = angle;
    this.image=loadImage("assets/atirar_pra_frente.png")
  }
  show(){
    if (keyIsDown(UP_ARROW) && this.angle > -10){
      this.angle-=2
    }
    if (keyIsDown(DOWN_ARROW) && this.angle < 100
    ){
      this.angle+=2
    }
    push()
    translate(this.x,this.y)
    rotate(this.angle)
    imageMode(CENTER)
    image(this.image,0,0,this.width,this.height)
    pop()
  }
  
}
