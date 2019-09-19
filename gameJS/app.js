// GoblinGo Game
// Author: Aadesh Nichite
// It is a simple game application
// class game{
//     constructor(canvas,width, height){

//         this.canvas = canvas;

//         this.width = width;

//         this.height = height;

//         canvas.width = width;

//         canvas.height = height;

//         this.ctx = canvas.getContext('2d');


//         var img = document.getElementById("playGround");
//         ctx.drawImage(img, 10, 10);

//      }
//   }

class player {
    constructor(player1,player2) {
      this.player1 = player1;
      this.player2 = player2;
      console.log(this.player1.value,this.player2.value)
    }
  }

  function init()
  {
    let player1=document.getElementById('player1');
    let player2=document.getElementById('player2');
    player = new player(player1,player2);
    // let canvas = document.getElementById('game');
    // let game = new Game(canvas,600,380);
    
  }

  