
//business logic
var player1 = "";
var player2 = "";

var rolldice = function() {
  return Math.floor(6 * Math.random()) + 1;
}

function Player(turn) {
  this.roll = 0;
  this.playerscore = 0;
  this.totalscore = 0;
  this.turn = turn;
  this.playerName;
}

// checking for 1
Player.prototype.rollone = function() {
  if (this.roll === 1) {
    this.playerscore = 0;
    alert("Sorry " + this.playerName + ", You rolled a 1! Your turn is over!")
    // this.changeturn();
  } else {
    this.playerscore += this.roll;
  }
}

// hold
Player.prototype.hold = function() {
  this.totalscore += this.playerscore;
  this.playerscore = 0;
  // this.changeturn
  alert(this.playerName + ", Your turn is over!");
}

// check for 100
Player.prototype.winnerCheck = function() {
  if (this.totalscore >= 100) {
    alert(this.playerName + " You are a Winner!");
  }
}

Player.prototype.newGame = function() {
  this.roll = 0;
  this.playerscore = 0;
  this.totalscore = 0;
  this.playerName = "";
}

var clearValues = function() {
  $(".player1Name").val("");
  $(".player2Name").val("");
}

// User Interface
$(document).ready(function() {

  $("button#start").click(function(event) {
    player1 = new Player(true);
    player2 = new Player(false);

    var player1Name = $(".player1Name").val();
    $("#player1Name").text(player1Name);

    var player2Name = $(".player2Name").val();
    $("#player2Name").text(player2Name);

    player1.playerName = player1Name;
    player2.playerName = player2Name;

  });
  $("button#new-game").click(function(event) {
    clearValues();
    player1.newGame();
    player2.newGame();
    $("#turn-total-1").empty();
    $("#total-score-1").empty();
    $("#die-roll-1").empty();
    $("#turn-total-2").empty();
    $("#total-score-2").empty();
    $("#die-roll-2").empty();


  });

  $("button#player1-roll").click(function(event) {
    player1.roll = rolldice();
    $("#die-roll-1").text(player1.roll);
    player1.rollone();
    $("#turn-total-1").text(player1.playerscore);
  });

  $("button#player2-roll").click(function(event) {
    player2.roll = rolldice();
    $("#die-roll-2").text(player2.roll);
    player2.rollone();
    $("#turn-total-2").text(player2.playerscore);
  });

  $("button#player1-hold").click(function(event) {
    player1.hold();
    $("#total-score-1").text(player1.totalscore);
    $("#turn-total-1").empty();
    $("#die-roll-1").empty();
    player1.winnerCheck();
  });

  $("button#player2-hold").click(function(event) {
    player2.hold();
    $("#total-score-2").text(player2.totalscore);
    $("#turn-total-2").empty();
    $("#die-roll-2").empty();
    player2.winnerCheck();
  });

});
