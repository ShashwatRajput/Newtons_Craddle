class Rope{
    constructor(body1, pointB){
        var options = {
            bodyA : body1,
            pointB : pointB
        }
        this.rope = Matter.Constraint.create(options)
        World.add(world, this.rope)
    }
    display(){
        var startPoint = this.rope.bodyA.position;
        var endPoint = this.rope.pointB;
        stroke(255)
        line(startPoint.x, startPoint.y, endPoint.x, endPoint.y)
    }

}
