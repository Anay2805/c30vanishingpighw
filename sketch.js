const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground, platform, bb1, bb2, bb3, ob4, pb1, pb2, pb3, ob1, ob2, ob3, slingShot, ball;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;



    ground = new Ground(200,390, 400, 30);
    platform = new Ground(300, 250, 200, 20);
    bb1 = new blueBox(220, 210, 40, 60);
    pb1 = new purpleBox(260, 210, 40, 60);
    ob1 = new orangeBox(300, 210, 40, 60);
    bb2 = new blueBox(340, 210, 40, 60);
    pb3 = new purpleBox(240, 150, 40, 60);
    ob2 = new redBox(280,150, 40, 60);
    pb2 = new purpleBox(320, 150, 40, 60);
    ob3 = new orangeBox(260, 90, 40, 60);
    rb = new redBox(280, 30, 40, 50);
    bb3 = new blueBox(300, 90, 40, 60);
    ball = new Ball(100, 100, 20)
    
    slingShot = new Slingshot(ball.body,{x : 100, y : 100});

    World.add(world,ground);

    console.log(ground);
}

function draw(){
    background(0);
    Engine.update(engine);
    ground.display();
    platform.display();
    bb1.display();
    pb1.display();
    ob1.display();
    pb2.display();
    pb3.display();
    ob2.display();
    bb2.display();
    ob3.display();
    rb.display();
    bb3.display();
    ball.display();
    slingShot.display();
}

function mouseReleased(){
    slingShot.fly(ball)
}

function mouseDragged(){
    ball.body.position.x = mouseX;
    ball.body.position.y = mouseY;
}