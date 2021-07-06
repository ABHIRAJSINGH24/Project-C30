class SlingShot{
    constructor(bodyA,bodyB){
        var options={
            'bodyA':bodyA,
            'bodyB':bodyB,
            'stiffness':0.04,
            'length':10
        }
        this.Slingshot=Constraint.create(options);
        World.add(world,this.Slingshot);
        }
        display(){
            var posA=this.Slingshot.bodyA.position;
            var posB=this.Slingshot.bodyB.position;
            strokeWeight(4);
            line(posA.x,posA.y,posB.x,posB.y);
        }
    }