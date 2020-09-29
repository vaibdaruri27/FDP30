class Box{
    constructor(x, y, width, height) {
        var options = {
            'restitution':0.4,
            'friction':3.0,
            'density':2.0
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.visibility = 225;
        World.add(world, this.body);
      }
      display(){
        if(this.body.speed<3){
        var pos = this.body.position;
        rectMode(CENTER);
        rect(pos.x,pos.y,this.width,this.height);
        }
        else{
          World.remove(world,this.body);
          push();
          this.visibility = this.visibility-5;
          tint(225,0,0);
          image(this.body,this.body.position.x,this.body.position.y,this.width,this.height);
          pop();
        }
      }

}