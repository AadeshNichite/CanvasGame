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
      let score1;
      let score2;
      console.log(this.player1.value,this.player2.value);
      let array1=[{name: this.player1.value,score:0}];
      let array2=[{name: this.player2.value,score:0}]; 
      localStorage.setItem("player-1",JSON.stringify(array1));
      localStorage.setItem("player-2",JSON.stringify(array2));

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

  