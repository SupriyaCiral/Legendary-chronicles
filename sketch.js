var canvas, backgroundImage;



var gameState;
var startQuiz=0
var score =0;

var form, player, game;


function preload(){
  
}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);

  game = new Game();
  game.start();
}


function draw(){
/* if(startQuiz==1){
    quiz=new Quiz();
    quiz.display();
 }*/
}
