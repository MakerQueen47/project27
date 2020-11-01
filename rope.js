class rope {

    constructor(bodyA, bodyB, offsetX, offsetY){

        this.oX = offsetX;
        this.oY = offsetY;
        var options = {

            bodyA: bodyA,
            bodyB: bodyB,
            pointB: { x:this.oX , y:this.oY},
            stiffness: 0.0004,
            length:400

        }
    
        this.rope = Constraint.create(options);
        World.add(world,this.rope);



    }

    display(){

        var pointA = this.rope.bodyA.position;
        var pointB = this.rope.bodyB.position;

        fill("white");
        stroke("white");
        strokeWeight(3);
        line(pointA.x,pointA.y,pointB.x + this.oX, pointB.y+this.oY);

    }





}