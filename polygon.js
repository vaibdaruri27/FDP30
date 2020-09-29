class Polygon{
    constructor(x, y, radius) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':4.0
        }
        this.body = Bodies.circle(x, y, radius, options);
        this.radius = radius;
        // this.width = width;
        // this.height = height;
        this.image = loadImage("polygon.png");
        World.add(world, this.body);
      }
      display(){
        // var angle = this.body.angle;
        // push();
        // translate(this.body.position.x, this.body.position.y);
        // rotate(angle);
        imageMode(CENTER);
        image(this.image, this.body.position.x, this.body.position.y, 200, 100);
        // pop();
      }
}