var gameState,playerCount,form,player,game,database,position;

function setup(){
    createCanvas(1000,1000);
    database = firebase.database();
    game = new Game();
    game.getState();
    game.start();
}
