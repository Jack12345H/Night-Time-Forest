//Canvas and grass
var cnv = document.getElementById("drawing");
var ctx = cnv.getContext("2d");
cnv.width = 700;
cnv.height = 500;
ctx.fillStyle = "green";
ctx.fillRect(0, 0, 700, 500);

//sky(night)
ctx.fillStyle = "black";
ctx.fillRect(0, 0, 700, 375);

//tree body(s)
ctx.fillStyle = "brown";
ctx.fillRect(75, 250, 30, 205);

ctx.fillStyle = "brown";
ctx.fillRect(200, 270, 20, 165);

ctx.fillStyle = "brown";
ctx.fillRect(350, 270, 35, 195);

ctx.fillStyle = "brown";
ctx.fillRect(600, 270, 20, 155);

//Tree top

//Tree 1
ctx.fillStyle = "green";
ctx.beginPath();
ctx.arc(90, 250, 50, 0, 2 * Math.PI);
ctx.fill();

ctx.fillStyle = "green";
ctx.beginPath();
ctx.arc(120, 265, 35, 0, 2 * Math.PI);
ctx.fill();

ctx.fillStyle = "green";
ctx.beginPath();
ctx.arc(60, 265, 35, 0, 2 * Math.PI);
ctx.fill();

//tree 2
ctx.fillStyle = "green";
ctx.beginPath();
ctx.arc(210, 270, 35, 0, 2 * Math.PI);
ctx.fill();

ctx.fillStyle = "green";
ctx.beginPath();
ctx.arc(230, 280, 25, 0, 2 * Math.PI);
ctx.fill();

ctx.fillStyle = "green";
ctx.beginPath();
ctx.arc(190, 280, 25, 0, 2 * Math.PI);
ctx.fill();

//tree 3
ctx.fillStyle = "green";
ctx.beginPath();
ctx.arc(368, 270, 70, 0, 2 * Math.PI);
ctx.fill();

ctx.fillStyle = "green";
ctx.beginPath();
ctx.arc(415, 290, 50, 0, 2 * Math.PI);
ctx.fill();

ctx.fillStyle = "green";
ctx.beginPath();
ctx.arc(325, 290, 50, 0, 2 * Math.PI);
ctx.fill();

//tree 4
ctx.fillStyle = "green";
ctx.beginPath();
ctx.arc(610, 290, 40, 0, 2 * Math.PI);
ctx.fill();

ctx.fillStyle = "green";
ctx.beginPath();
ctx.arc(640, 300, 30, 0, 2 * Math.PI);
ctx.fill();

ctx.fillStyle = "green";
ctx.beginPath();
ctx.arc(580, 300, 30, 0, 2 * Math.PI);
ctx.fill();

//moon
ctx.fillStyle = "rgb(221, 221, 221";
ctx.beginPath();
ctx.arc(690, 25, 70, 0, 2 * Math.PI);
ctx.fill();

//branches
ctx.lineWidth = 5;
ctx.strokeStyle = "brown";
ctx.beginPath();
ctx.moveTo(210, 340);
ctx.lineTo(260, 330);
ctx.stroke();

ctx.lineWidth = 5;
ctx.strokeStyle = "brown";
ctx.beginPath();
ctx.moveTo(210, 370);
ctx.lineTo(170, 350);
ctx.stroke();

ctx.lineWidth = 8;
ctx.strokeStyle = "brown";
ctx.beginPath();
ctx.moveTo(80, 330);
ctx.lineTo(160, 300);
ctx.stroke();

ctx.lineWidth = 8;
ctx.strokeStyle = "brown";
ctx.beginPath();
ctx.moveTo(40, 360);
ctx.lineTo(80, 370);
ctx.stroke();

ctx.lineWidth = 8;
ctx.strokeStyle = "brown";
ctx.beginPath();
ctx.moveTo(380, 360);
ctx.lineTo(450, 340);
ctx.stroke();

ctx.lineWidth = 8;
ctx.strokeStyle = "brown";
ctx.beginPath();
ctx.moveTo(370, 400);
ctx.lineTo(290, 390);
ctx.stroke();

ctx.lineWidth = 8;
ctx.strokeStyle = "brown";
ctx.beginPath();
ctx.moveTo(610, 340);
ctx.lineTo(560, 360);
ctx.stroke();

ctx.lineWidth = 8;
ctx.strokeStyle = "brown";
ctx.beginPath();
ctx.moveTo(650, 370);
ctx.lineTo(610, 360);
ctx.stroke();

let star = document.getElementById("star");
ctx.drawImage(star, 400, 40, 25, 25);
ctx.drawImage(star, 50, 70, 25, 25);
ctx.drawImage(star, 200, 50, 25, 25);
ctx.drawImage(star, 280, 80, 25, 25);
ctx.drawImage(star, 490, 80, 25, 25);
ctx.drawImage(star, 130, 120, 25, 25);
ctx.drawImage(star, 370, 130, 25, 25);
ctx.drawImage(star, 560, 150, 25, 25);
ctx.drawImage(star, 560, 20, 25, 25);

//title
ctx.fillStyle = "rgb(220. 13, 190)";
ctx.font = "20px Arial";
ctx.fillText("Night time forest", 20, 20);
