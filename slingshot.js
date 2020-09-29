class SlingShot{
    constructor(bodyA, pointB){
        // console.log("inside constructor()");
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.02,
            length: 10
        }
        this.bodyA = bodyA;
        this.pointB = pointB;
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

        fly(){
            this.sling.bodyA = null;
        }
    

    display(){
        if(this.sling.bodyA){
        var pointA = this.sling.bodyA.position;
        var pointB = this.pointB;
         push();
        stroke("blue");
        strokeWeight(4);
        line(pointA.x,pointA.y,pointB.x,pointB.y);
         pop();
     }
    }
}