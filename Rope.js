class Rope{

    constructor(bodyA, pointB){

        var options = {
            bodyA : bodyA,
            pointB : pointB,
            stiffness : 0.04,
            length : 50
        }

        this.pointB = pointB;
        this.rope = Constraint.create(options);
        World.add(world, this.rope);

    }

    display(){

        var pointA = this.rope.bodyA.position;
        var pointB = this.pointB;
        push();
        stroke("red");
        strokeWeight(10);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        pop();

    }

}