const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var ball1, ball2,ball3;
var engine;
var world;

function setup(){
    var canvas = createCanvas(1200,1200);
    engine = Engine.create();
    world = engine.world;


    ground1 = new Ground(600,1200,1200,20);
    ground2 = new Ground(600,0,1200,20);
    ground3 = new Ground(0,600,20,1200);
    ground4 = new Ground(1200,600,20,1200);
    ball1 = new ball(random(0,1200),random(0,1200),50,50);
    ball2 = new ball(random(0,1200),random(0,1200),50,50);
    ball3 = new ball(random(0,1200),random(0,1200),50,50);
    ball4 = new ball(random(0,1200),random(0,1200),50,50);
    ball5 = new ball(random(0,1200),random(0,1200),50,50);
    ball6 = new ball(random(0,1200),random(0,1200),50,50);
    ball7 = new ball(random(0,1200),random(0,1200),50,50);
    ball8 = new ball(random(0,1200),random(0,1200),50,50);
    ball9 = new ball(random(0,1200),random(0,1200),50,50);
    ball10 = new ball(random(0,1200),random(0,1200),50,50);
    ball11 = new ball(random(0,1200),random(0,1200),50,50);
    ball12 = new ball(random(0,1200),random(0,1200),50,50);
    ball13 = new ball(random(0,1200),random(0,1200),50,50);
    ball14 = new ball(random(0,1200),random(0,1200),50,50);
    ball15= new ball(random(0,1200),random(0,1200),50,50);
    ball16= new ball(random(0,1200),random(0,1200),50,50);
    ball17 = new ball(random(0,1200),random(0,1200),50,50);
    ball18 = new ball(random(0,1200),random(0,1200),50,50);
    ball19 = new ball(random(0,1200),random(0,1200),50,50);
    ball20 = new ball(random(0,1200),random(0,1200),50,50);
    ball21 = new ball(random(0,1200),random(0,1200),50,50);
    ball22 = new ball(random(0,1200),random(0,1200),50,50);
    ball23 = new ball(random(0,1200),random(0,1200),50,50);
    ball24 = new ball(random(0,1200),random(0,1200),50,50);
}

function draw(){
    background(255);
    ground1.display();
    Engine.update(engine);
    ball1.display();
    ball2.display();
    ball3.display();
    ball4.display();
    ball5.display();
    ball6.display();
    ball7.display();
    ball8.display();
    ball9.display();
    ball10.display();
    ball11.display();
    ball12.display();
    ball13.display();
    ball14.display();
    ball15.display();
    ball16.display();
    ball17.display();
    ball18.display();
    ball19.display();
    ball20.display();
    ball21.display();
    ball22.display();
    ball23.display();
    ball24.display();
    ground2.display();
    ground3.display();
    ground4.display();
}