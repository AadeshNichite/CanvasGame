// GoblinGo Game
// Author: Aadesh Nichite
// It is a simple game application

class player {
    constructor(player1,player2) {
      this.player1 = player1;
      this.player2 = player2;
      console.log(this.player1.value,this.player2.value)
    }
  }

  function init()
  {
    var player1=document.getElementById('player1');
    var player2=document.getElementById('player2');
    player = new player(player1,player2);
  }