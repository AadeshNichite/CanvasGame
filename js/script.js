// Author: Debarun Mitra
// Technology used: HTML, CSS, JavaScript, JQuery, Bootstrap
// objective: Create a responsive game using HTML canvas, CSS, JavaScript, jQuery,Bootstrap

let canvas = document.createElement("canvas");
let ctx = canvas.getContext("2d");
canvas.width = 550;
canvas.height = 550;
document.getElementById('cid').appendChild(canvas);
// Background image
let bgReady = false;
let bgImage = new Image();
bgImage.onload = function () {
bgReady = true;
};
bgImage.src = "images/playGround.png";

let render = function () {
	if(bgReady) {
		ctx.drawImage(bgImage, 0, 0);
	}
};
// The main game loop
let main = function () {
	render();
	requestAnimationFrame(main);
};
// Cross-browser support for requestAnimationFrame
let w = window;
requestAnimationFrame = w.requestAnimationFrame || w.webkitRequestAnimationFrame || w.msRequestAnimationFrame || w.mozRequestAnimationFrame;
main()
