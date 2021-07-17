class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.08,
            length: 1
        }
        this.bodyA = bodyA;
        
        this.sling = Constraint.create(options);
        this.pointB = pointB
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }

    attach(body){
        this.sling.bodyA = body;
    }

    display(){
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            push();
            stroke("green");

        if(pointA.x<220){
            strokeWeight(5);
            line(pointA.x-20, pointA.y, pointB.x-10, pointB.y);
        }
        else{
            strokeWeight(3);
            line(pointA.x-20, pointA.y, pointB.x-10, pointB.y);
        }
            
        pop();
        }
    }
    
}