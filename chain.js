class Chain{
    constructor(bodyA,bodyB,offsetX,offsetY){
        this.offsetX=offsetX
        this.offsetY=offsetY

        var options={
    bodyA:bodyA,
    bodyB:bodyB,
    pointB:{x:this.offsetX, y:this.offsetY}
    

}
this.chain=Constraint.create(options);
World.add(world,this.chain);
    }
    display(){
        var pointA=this.chain.bodyA.position
        var pointB=this.chain.bodyB.position
        strokeWeight(2);
       var Anchore1X=pointA.x
       var Anchore1Y=pointA.y
       stroke("white")

       var Anchore2X=pointB.x+this.offsetX
       var Anchore2Y=pointB.y+this.offsetY
       line(Anchore1X,Anchore1Y,Anchore2X,Anchore2Y);
    }
}