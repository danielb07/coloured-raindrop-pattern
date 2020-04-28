class Raindrop {
    constructor(x,y,c){
        var options = {
            collisionFilter:0
            
        }
        this.body = Bodies.circle(x,y,20,options);
        World.add(world,this.body);
        this.color = c;
        
    }
    display(){
        push();
        fill(this.color);
        ellipse(this.body.position.x,this.body.position.y,10,10);
        pop();
    }
}