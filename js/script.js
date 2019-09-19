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
    this.inputKey=(type ==="player-1")?[65,68,87,83]:[37,39,38,40];
  }
  putPlayer(canvasCtx,a,b){
     let p=new Image();
     p.src=(this.type==='player-1')?'images/player-1.png':'images/player-2.png';
     p.onload=()=>{
       console.log(a);
       console.log(b);
       canvasCtx.drawImage(p,a,b);
     }
   }
}
class Game{
    constructor(canvas,width, height){
        this.canvas = canvas;
        this.width = width;
        this.height = height;
        canvas.width = width;
        canvas.height = height;
        this.players=[];
        this.ctx = canvas.getContext('2d');
        document.addEventListener('keydown',this.keyPress.bind(this));
    }
    makeBase(){
      let ground=new Image();
      ground.src='images/playGround.png';
      ground.onload=()=>{
      this.ctx.drawImage(ground,0,0);
      }
    }
    createPlayers(name,type,x,y){
    //  let players=[];
      let dx=(type==='player-1')?(Math.floor(Math.random()*(x/3)/2)):(Math.floor(Math.random()*(x-((x/3)/2))));
      let dy=(type==='player-1')?(Math.floor(Math.random()*(y/3)/2)):(Math.floor(Math.random()*(y-((y/3)/2))));
      let gplayer=new Player(name,type,dx,dy);
      gplayer.putPlayer(this.ctx,dx,dy);
      this.players.push(gplayer);
      //return this.players;

    }
    keyPress(e){
        console.log(this.players);
        this.makeBase();
        this.players.filter((data) =>(data.inputKey.includes(e.keyCode))).map((mainItem) =>
         {
           console.log(mainItem);
           (mainItem.inputKey[0]===e.keyCode)?mainItem.x=mainItem.x-10:
           (mainItem.inputKey[1]===e.keyCode)?mainItem.x=mainItem.x+10:
           (mainItem.inputKey[2]===e.keyCode)?mainItem.y=mainItem.y-10:
           (mainItem.inputKey[3]===e.keyCode)?mainItem.y=mainItem.y+10:
           false;
           let movePlayer=new Player(mainItem.name,mainItem.type);
           movePlayer.putPlayer(this.ctx,mainItem.x,mainItem.y);
         }
      );
    }
}

let goblinGO=document.getElementById('myCanvas');
let game=new Game(goblinGO,550,550);
game.makeBase();
game.createPlayers('alpha','player-1',550,550);
game.createPlayers('beta','player-2',550,550);
//game.play();
//console.log(players);