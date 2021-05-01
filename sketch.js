var canvas;
var music;
var redSurface,BlueSurface,yellowSurface,greenSurface
var box

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);
    //create 4 different surfaces
    redSurface=createSprite(100,590,150,50)
    blueSurface=createSprite(300,590,150,50)
    yellowSurface=createSprite(500,590,150,50)
    greenSurface=createSprite(700,590,150,50)
    redSurface.shapeColor="red"
    blueSurface.shapeColor="blue"
    yellowSurface.shapeColor="yellow"
    greenSurface.shapeColor="green"

    //create box sprite and give velocity
    box=createSprite(random(20,750),300,50,50)
    box.shapeColor="white"
    box.velocityX=-5
    box.velocityY=-2
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    if(box.y<0){
        box.velocityY=2
    }
    if(box.x<0){
        box.velocityX=5
        
    }
    if (box.x>800){
        box.velocityX=-5
    }

    if(box.y>600){
        box.velocityY=-5
    }

    //add condition to check if box touching surface and make it box
    if(box.isTouching(redSurface)){
        box.shapeColor="red"
        box.velocityY=-5
    }

if(box.isTouching(blueSurface)){
        box.shapeColor="blue"
        box.velocityY=-5
}
if(box.isTouching(yellowSurface)){
    box.shapeColor="yellow"
    box.velocityY=-5
}
if(box.isTouching(greenSurface)){
    box.shapeColor="green"
    box.velocityY=0
    box.velocityX=0
    music.play()

}
    drawSprites()
}
