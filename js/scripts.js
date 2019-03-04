function players(firstPlayer, secondPlayer){
  this.firstPlayer= firstPlayer;
  this.secondPlayer= secondPlayer;
}
var playGame ={
  firstPlayerScore = 0;
  secondPlayerScore = 0;
  playerUp = 1;
  turnScore = 0;
}

function rollDie () {
  die = Math.play(Math.random()*6)+1;
  return die;
}
