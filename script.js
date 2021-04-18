//variavel para o canvas
var canvas = document.getElementById("draw");

//web-responsive
var ctx = canvas.getContext("2d");
resize();

function resize()
{
	ctx.canvas.width = window.innerWidth;
	ctx.canvas.height = window.innerHeight;
}

//para a posição do rato
var pos = {x:0,y:0};

function setPosition(e)
{
	pos.x = e.clientX;
	pos.y =e.clientY;
}

//para desenhar
function draw(e)
{
	if(e.buttons !== 1) return; //se o rato nao for pressionado
	
	var color = document.getElementById("hex").value;
	
	ctx.beginPath();
	
	//propriedades da linha
	ctx.lineWidth = 20;
	ctx.lineCap = "round";
	ctx.strokeStyle = color;
	
	//posiçao da linha
	ctx.moveTo(pos.x,pos.y);
	setPosition(e);
	ctx.lineTo(pos.x,pos.y);
	
	ctx.stroke();
}

//se a janela for ajustada
window.addEventListener("resize",resize);

//eventos de rato
document.addEventListener("mousemove",draw);
document.addEventListener("mousedown",setPosition);
document.addEventListener("mouseenter",setPosition);