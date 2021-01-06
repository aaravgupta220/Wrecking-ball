const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, box2, box3, box4;
var box5, box6, box7, box8;
var ball;
var rope;

function setup(){

    createCanvas(1600, 800);

    engine = Engine.create();

    world = engine.world;

    //creating ground
    ground = new Ground(800, 790, 1600, 20);

    //creating boxes
    box1 = new Box(1200, 750, 80, 80);
    box2 = new Box(1200, 710, 80, 80);
    box3 = new Box(1200, 670, 80, 80);
    box4 = new Box(1200, 630, 80, 80);

    box5 = new Box(1240, 750, 80, 80);
    box6 = new Box(1240, 710, 80, 80);
    box7 = new Box(1240, 670, 80, 80);
    box8 = new Box(1240, 630, 80, 80);

    box9 = new Box(1280, 750, 80, 80);
    box10 = new Box(1280, 710, 80, 80);
    box11 = new Box(1280, 670, 80, 80);
    box12 = new Box(1280, 630, 80, 80);

    ball = new Ball(800, 200, 40);

    rope = new Rope(ball.body, {x:800, y:500});

}

function draw(){

    background("white");

    Engine.update(engine);

    ground.display();

    box1.display();
    box2.display();
    box3.display();
    box4.display();

    box5.display();
    box6.display();
    box7.display();
    box8.display();

    box9.display();
    box10.display();
    box11.display();
    box12.display();

    ball.display();

    rope.display();

}

function mouseDragged(){

    Matter.Body.setPosition(ball.body, {x:mouseX, y:mouseY});

}

