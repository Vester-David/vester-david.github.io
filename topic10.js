var c = document.getElementById("draw");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.arc(50,50,40,0,2*Math.PI);
ctx.stroke();