// GoblinGo Game
// Author: Aadesh Nichite
// It is a simple game application

class PlayerName{
  constructor(player1,player2) {
	this.player1 = player1;
	this.player2 = player2;
	let score1;
	let score2;
  sessionStorage.setItem("player1Name",this.player1.value);
  sessionStorage.setItem("player2Name",this.player2.value);
  sessionStorage.setItem("player1Score",0);
  sessionStorage.setItem("player2Score",0);
  }
}
function init()
{
  let player1=document.getElementById('player1');
  let player2=document.getElementById('player2');
  player = new PlayerName(player1,player2);
  if(player1.value!=='' && player2.value!=='')
  {
  location.replace('game.html');
  }
}
function init1()
{
  document.getElementById("p1score").innerHTML=sessionStorage.getItem("player1Score");
  document.getElementById("p2score").innerHTML=sessionStorage.getItem("player2Score");
  let player1Sco=sessionStorage.getItem("player1Score");
  let val=parseInt(player1Sco, 10);
  let player2Sco=sessionStorage.getItem("player2Score");
  let val1=parseInt(player2Sco, 10);
      if(val>val1)
      {
        document.getElementById("playerWin").innerHTML=sessionStorage.getItem("player1Name");
      }
	else if(val===val1)
	{
		        document.getElementById("playerWin").innerHTML='Game&nbsp;Draw';
	}
      else {
        document.getElementById("playerWin").innerHTML=sessionStorage.getItem("player2Name");
      }
}
function end(){
  sessionStorage.clear();
  location.replace('index.html');
}
