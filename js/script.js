// Author: Debarun Mitra,Aadesh Nichite
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
         canvasCtx.drawImage(p,a,b);
       }
     }
  }
  class Goblin{
    constructor(type,x,y)
    {
      this.type=type;
      this.x=x;
      this.y=y;
    }
    putGoblin(gCtx,gx,gy)
    {
      let g=new Image();
      g.src='images/goblin.png';
      g.onload=()=>{
      gCtx.drawImage(g,gx,gy);
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
          this.goblin=[];
          this.ctx = canvas.getContext('2d');
          document.addEventListener('keydown',this.keyPress.bind(this));
          document.addEventListener('keyup',this.keyPress.bind(this));
      }
      makeBase(){
        let ground=new Image();
        ground.src='images/playGround.png';
        ground.onload=()=>{
        this.ctx.drawImage(ground,0,0);
        }
      }
      createPlayers(name,type,x,y){
        let dx=(type==='player-1')?(Math.floor(Math.random()*(x/3)/2)):(Math.floor(Math.random()*(x-((x/3)/2))));
        let dy=(type==='player-1')?(Math.floor(Math.random()*(y/3)/2)):(Math.floor(Math.random()*(y-((y/3)/2))));
        let gplayer=new Player(name,type,dx,dy);
        gplayer.putPlayer(this.ctx,dx,dy);
        this.players.push(gplayer);
        let player1nm=sessionStorage.getItem("player1Name");
        let player2nm=sessionStorage.getItem("player2Name");
        document.getElementById("player1Name").innerHTML=player1nm;
        document.getElementById("player2Name").innerHTML=player2nm;
        let player1Sc=sessionStorage.getItem("player1Score");
        let player2Sc=sessionStorage.getItem("player2Score");
        document.getElementById("player1Score").innerHTML=player1Sc;
        document.getElementById("player2Score").innerHTML=player2Sc;
      }
       createGoblin(w,h){
          console.log('cg 1: '+w+' ,'+h);
          (w>500 && h>500)?w=h=400:(h>480)?h-=20:(w>480)?w-=20:true;
          w=Math.floor(Math.random()*(w));
          h=Math.floor(Math.random()*(h));
          console.log('cg random 2: '+w+' ,'+h);
         let gob=new Goblin('goblin',w,h);
         gob.putGoblin(this.ctx,w,h);
         this.goblin[0]=gob;
       }
      keyPress(e){
          this.makeBase();
          this.players.filter((data) =>(data.inputKey.includes(e.keyCode))).map((mainItem) =>
           {
             (mainItem.inputKey[0]===e.keyCode)?mainItem.x=mainItem.x-10:
             (mainItem.inputKey[1]===e.keyCode)?mainItem.x=mainItem.x+10:
             (mainItem.inputKey[2]===e.keyCode)?mainItem.y=mainItem.y-10:
             (mainItem.inputKey[3]===e.keyCode)?mainItem.y=mainItem.y+10:
             false;
             let movePlayer1=new Player(mainItem.name,mainItem.type);
             movePlayer1.putPlayer(this.ctx,mainItem.x,mainItem.y);
             let p2=this.players.filter((item) =>(item.type!==mainItem.type)).map((per) =>{
             let movePlayer2=new Player(per.name,per.type);
             movePlayer2.putPlayer(this.ctx,per.x,per.y);
             let vill=new Goblin('goblin',this.width,this.height);
             vill.putGoblin(this.ctx,this.goblin[0].x,this.goblin[0].y);
           });
           this.positionCheck();
      });
    }
    positionCheck()
    {
       if(((Math.abs(this.goblin[0].x-this.players[0].x))<=40) && ((Math.abs(this.goblin[0].y-this.players[0].y))<=70))
       {
        let player1Sco=sessionStorage.getItem("player1Score");
         let val=parseInt(player1Sco, 10);
         document.getElementById("player1Score").innerHTML=val+1;
         sessionStorage.setItem("player1Score",val+1);
          this.createGoblin(this.width,this.height);
       }
       else if((Math.abs(this.goblin[0].x-this.players[1].x))<=40 && ((Math.abs(this.goblin[0].y-this.players[1].y))<=70))
       {
        let player2Sco=sessionStorage.getItem("player2Score");
         let val=parseInt(player2Sco, 10);
         document.getElementById("player2Score").innerHTML=val+1;
         sessionStorage.setItem("player2Score",val+1);
         this.createGoblin(this.width,this.height);
       }

    }
    startTimer() {
           var time_in_minutes = 2;
           var current_time = Date.parse(new Date());
           var deadline = new Date(current_time + time_in_minutes*60*1000);
           function time_remaining(endtime){
               var t = Date.parse(endtime) - Date.parse(new Date());
               var seconds = Math.floor( (t/1000) % 60 );
               var minutes = Math.floor( (t/1000/60) % 60 );
               var hours = Math.floor( (t/(1000*60*60)) % 24 );
               var days = Math.floor( t/(1000*60*60*24) );
               return {'total':t, 'days':days, 'hours':hours, 'minutes':minutes, 'seconds':seconds};
           }
           function run_clock(id,endtime){
               var clock = document.getElementById('timer');
               function update_clock(){
                   var t = time_remaining(endtime);
                   document.getElementById("timer").innerHTML=t.minutes+':'+t.seconds;
                   if(t.total<=0){
                       clearInterval(timeinterval);
                       let player1Sc=sessionStorage.getItem("player1Score");
                       let player2Sc=sessionStorage.getItem("player2Score");
                       document.getElementById("player1Score").innerHTML=player1Sc;
                       document.getElementById("player2Score").innerHTML=player2Sc;
                       location.replace("score.html");
                    }
               }
               update_clock();
               var timeinterval = setInterval(update_clock,1000);
           }
               run_clock('timer',deadline);
   }
  }
  let goblinGO=document.getElementById('myCanvas');
  let game=new Game(goblinGO,550,550);
  game.makeBase();
  game.createPlayers('alpha','player-1',50,50);
  game.createPlayers('beta','player-2',500,500);
  game.createGoblin(550,550);
  game.positionCheck();
  game.startTimer();
