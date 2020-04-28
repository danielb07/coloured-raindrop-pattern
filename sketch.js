const {Engine, World, Bodies} = Matter;
var engine, world;
var droplets = [];


function setup() {
  createCanvas(600,400);
  engine = Engine.create();
  world = engine.world;

  
}

function draw() {
  background(255,255,255);  
  Engine.update(engine);
  // console.log(World.FrameCount);

  
  if(frameCount%1===0){
    var x = random(30,570);
    let words = ['blue', 'green', 'aqua', 'red'];
    let color = random(words);
    var raindrop = new Raindrop(x,0,color);
    droplets.push(raindrop);
  }
  for(var i=0;i<droplets.length;i++){
    var droplet = droplets[i]
    droplet.display();
    
  }
  
} 
