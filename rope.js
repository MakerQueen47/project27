class rope {

    constructor(bodyA, bodyB, pointB){


        var options = {

            bodyA: bodyA,
            pointB: pointB,
            stiffness: 1,
            length:400

        }
    
        this.rope = Constraint.create(options);
        World.add(world,this.rope);



    }

    display(){

        var pointA = this.rope.bodyA.position;
        var pointB = this.rope.pointB;
        
        push();

        fill("white");
        stroke("white");
        strokeWeight(3);
        line(pointA.x,pointA.y,pointB.x,pointB.y);

        pop();

    }





}