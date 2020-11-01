class bob {

    constructor(x,y,diameter){
            // constructor function is invoked everytime we create an object from 'this' class! 
        var options= {

            restitution:1,
            density:0.8

        }

        this.body = Bodies.circle(x,y,diameter/2,options);
        World.add(world, this.body);
        this.r = diameter/2;

    }

    display(){

      
        var angle = this.body.angle;
        var pos = this.body.position;

       push();
       //strokeWeight(2);
	   //stroke("red");
	   fill("red");
       translate(pos.x,pos.y);
       rotate(angle);
     
        ellipseMode(RADIUS);
        ellipse(0, 0, this.r);
        pop();


    }



}