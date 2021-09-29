class Snow{
    constructor(x , y , r){
       var options = {
           restitution: 0.4,
       }
       this.r = r; 
       this.image = loadImage("snow1.jpg") 
       this.body = Bodies.circle(x, y, this.r, options); 
       World.add(world, this.body)
    }
display(){
    var posbody = this.body.position;
    var Angle = this.body.angle;
    push();
    translate(posbody.x , posbody.y);
    rotate(angle); 
    fill("white");
    imageMode(CENTER);
    image(this.image, 0, 0, this.r*2, this.r*2); 
    pop();
}

}