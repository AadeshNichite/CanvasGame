// Author: Debarun Mitra
// Technology used: HTML, CSS, JavaScript, JQuery, Bootstrap
// objective: Create a responsive game using HTML canvas, CSS, JavaScript, jQuery,Bootstrap
class Player{
  constructor(name,type,x,y)
  {
    this.name=name;
    this.type=type;
    this.x=x;
    this.y=y;
    this.inputKey=(type ==="player-1")?[65, 68, 87, 83]:[37, 39, 38, 40];
  }
  createPlayers(){

  }
}
class Game{
    constructor(canvas,width, height){
        this.canvas = canvas;
        this.width = width;
        this.height = height;
        canvas.width = width;
        canvas.height = height;
        this.ctx = canvas.getContext('2d');
        //document.addEventListener('keydown',this.keyPress.bind(this));
    }
    makeBase(){
      let ground=new Image();
      ground.src='images/playGround.png';
      ground.onload=()=>{
      this.ctx.drawImage(ground,0,0);
      }
    }
    // createPlayers(namw,){
    //
    //     // let players = [];
    //     // for(let i=0;i<num;i++){
    //     //     let type = (i<num/2)?'player-1':'player-2';
    //     //     let name = type+' '+ (i%num/2+1);
    //     //     let x = Math.floor(Math.random()*this.width);
    //     //     let y = Math.floor(Math.random()* this.height/3)+(type == 'player-2')? 2*this.height/3:0;
    //     //     let gPlayer = new Player(name,type,x,y);
    //     //     players.push(gPlayer);
    //     // }
    //     // return players;
    // }
    play(){
         this.ctx.clearRect(0, 0, this.width, this.height); // just clear the whole game area
      //   this.players.forEach(player=>{ player.draw(this.ctx);});
         requestAnimationFrame(this.play.bind(this))
     }
    keyPress(e){
        this.players.filter((data) =>(data.arrows.includes(e.keyCode))).map((mainItem) =>
         {
          (mainItem.arrows[0]===e.keyCode)?mainItem.x=mainItem.x-100:
          (mainItem.arrows[1]===e.keyCode)?mainItem.x=mainItem.x+100:
          (mainItem.arrows[2]===e.keyCode)?mainItem.y=mainItem.y-100:
          (mainItem.arrows[3]===e.keyCode)?mainItem.y=mainItem.y+100:
          false;
         }
       );
    }
}


let goblinGO=document.getElementById('myCanvas');
   // let ground=new Image();
   // ground.src='images/playGround.png';
let game=new Game(goblinGO,550,550);
//console.log(ground);
game.makeBase();










//
// let canvas = document.createElement("canvas");
// let ctx = canvas.getContext("2d");
// canvas.width = 550;
// canvas.height = 550;
// document.getElementById('cid').appendChild(canvas);
// // Background image
// let bgReady = false;
// let bgImage = new Image();
// bgImage.onload = function () {
// bgReady = true;
// };
// bgImage.src = "images/playGround.png";
//
// let render = function () {
// 	if(bgReady) {
// 		ctx.drawImage(bgImage, 0, 0);
// 	}
// };
// // The main game loop
// let main = function () {
// 	render();
// 	requestAnimationFrame(main);
// };
// // Cross-browser support for requestAnimationFrame
// let w = window;
// requestAnimationFrame = w.requestAnimationFrame || w.webkitRequestAnimationFrame || w.msRequestAnimationFrame || w.mozRequestAnimationFrame;
// main()
