var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var cars, car1, car2, car3, car4, jewel,Jaguar;

var track, car1_img, car2_img, car3_img, car4_img, jewel_img,jaguar_img;

function preload(){
  track = loadImage("images/1.webp");
  car1_img = loadImage("images/RRFF.png");
  car2_img = loadImage("images/Dr.SBF.png");
  car3_img = loadImage("images/PSOFF.png");
  car4_img = loadImage("images/MFFF.png");
  //ground = loadImage("images/ground.png");
  //jewel_img = loadImage("images/Jewel.jpg");
  jaguar_img = loadImage("images/Jaguar.png");
}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState === 2){
    game.end();
  }
}
