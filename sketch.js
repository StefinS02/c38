var canvas;
var backgroundImage;
var bgImg;
var database;
var form, player;
var playerCount;
var car1_Img, car2_Img, track;
var car1, car2, cars=[]
var gameState;
var allPlayers=[]

function preload() {
  backgroundImage = loadImage("./assets/background.png");
  car1_Img = loadImage("assets/car1.png");
  car2_Img = loadImage("assets/car2.png");
  track = loadImage("assets/track.jpg");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();

}

function draw() {
  background(backgroundImage);
  if(playerCount == 2){
    console.log("gameState")
    game.update(1);
  }
  if(gameState == 1){
    game.play();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
