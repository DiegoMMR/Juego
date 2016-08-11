var tablero, direccion, numero;
var conteo = 0;
var text = "";



var teclas = {
	//numeros respecto al identificador de las flechas
	UP: 38,
	DOWN: 40,
	lEFT: 37,
	RIGHT: 39
};

var fondo = {
	imagenURL: "img/fondo.png",
	imagenOK: false
};

var tifis = {
	x: 100,
	y: 100,
	frenteURL: "img/diana-frente.png",
	frenteOK: false,
	atrasURL: "img/diana-atras.png",
	atrasOK: false,
	derURL: "img/diana-der.png",
	derOK: false,
	izqURL: "img/diana-izq.png",
	izqOK: false,
	velocidad: 50
};
var pulpo = {
	x: 400,
	y: 200,
	frenteURL: "img/pulpo-abajo.png",
	frenteOK: false,
	atrasURL: "img/pulpo-atras.png",
	atrasOK: false,
	derURL: "img/pulpo-der.png",
	derOK: false,
	izqURL: "img/pulpo-izq.png",
	izqOK: false,
	velocidad: 50
};


function inicio()
{
	
	var canvas = document.getElementById("campo");
	tablero = canvas.getContext("2d"); 

	//imagenes de tifis
	fondo.imagen = new Image();
	fondo.imagen.src = fondo.imagenURL;
	fondo.imagen.onload = confirmarFondo;

	tifis.frente = new Image();
	tifis.frente.src = tifis.frenteURL;
	tifis.frente.onload = confirmarFrente;

	tifis.atras = new Image();
	tifis.atras.src = tifis.atrasURL;
	tifis.atras.onload = confirmarAtras;

	tifis.der = new Image();
	tifis.der.src = tifis.derURL;
	tifis.der.onload = confirmarDer;

	tifis.izq = new Image();
	tifis.izq.src = tifis.izqURL;
	tifis.izq.onload = confirmarIzq;

	//imagenes de pulpo
	pulpo.frente = new Image();
	pulpo.frente.src = pulpo.frenteURL;
	pulpo.frente.onload = confirmarFrentePulpo;

	pulpo.atras = new Image();
	pulpo.atras.src = pulpo.atrasURL;
	pulpo.atras.onload = confirmarAtrasPulpo;

	pulpo.izq = new Image();
	pulpo.izq.src = pulpo.izqURL;
	pulpo.izq.onload = confirmarIzqPulpo;

	pulpo.der = new Image();
	pulpo.der.src = pulpo.derURL;
	pulpo.der.onload = confirmarDerPulpo;

	document.addEventListener("keydown", moverPulpo);
	document.addEventListener("keydown", teclado);
	document.addEventListener("keydown", punto);

	
}

function punto()
{
	//cada vez que se encuentran en el mismo punto se cuenta un punto
	if( tifis.x == pulpo.x && tifis.y == pulpo.y)
	{
		conteo++;
		text = "Puntos: " + conteo;
		p.innerHTML = text;
	}
}

function moverPulpo()
{
	//genera un numero a lazar para poder mover aleatoriamente al enemigo

	numero = Math.floor( Math.random() * (4 - 1 + 1) + 1 );
	//arriba
	if (numero == 1)
	{
		if(pulpo.y == 250 && pulpo.x < 150)
		{
			
		}else if(pulpo.y == 400 && pulpo.x > 100)
		{

		}else if(pulpo.y == 250 && pulpo.x >= 200 && pulpo.x < 250)
		{

		}else if(pulpo.y == 0) 
		{
			
		}else {

			pulpo.y -= pulpo.velocidad;
		}
	}
	//abajo
	if(numero == 2)
	{
		if(pulpo.y == 300 && pulpo.x > 100)
		{
			
		}else if(pulpo.y == 150 && pulpo.x < 150)
		{

		}else if(pulpo.y == 450) 
		{
			
		}else
		{
			pulpo.y += pulpo.velocidad;
		}
	}
	//derecha
	if(numero == 3)
	{
		if(pulpo.x == 150 && pulpo.y < 250)
		{
			
		}else if(pulpo.x == 100 && pulpo.y > 300 && pulpo.y < 400)
		{

		}else if(pulpo.x == 450) 
		{
			
		}else 
		{
			pulpo.x += pulpo.velocidad;
		}
	}
	//izquerda
	if(numero == 4)
	{
		if(pulpo.x == 250 && pulpo.y < 250)
		{
			
		}else if(pulpo.x == 150 && pulpo.y > 150 && pulpo.y < 250)
		{

		}else if(pulpo.x == 0) 
		{
			
		}else 
		{
			pulpo.x -= pulpo.velocidad;
		}
		
	}
}

function teclado(datos)
{
	//ingresa el codigo de las teclas del teclado para poder ser usadas y mover a tifis
	var codigo = datos.keyCode;

	if(codigo == teclas.UP)
	{
		if(tifis.y == 250 && tifis.x < 150)
		{
			
		}else if(tifis.y == 400 && tifis.x > 100)
		{

		}else if(tifis.y == 250 && tifis.x >= 200 && tifis.x < 250)
		{

		}else if(tifis.y == 0) 
		{
			
		}else {
			tifis.y -= tifis.velocidad;
		}

		
	}
	if(codigo == teclas.DOWN)
	{
		if(tifis.y == 300 && tifis.x > 100)
		{
			
		}else if(tifis.y == 150 && tifis.x < 150)
		{

		}else if(tifis.y == 450) 
		{
			
		}else {
			tifis.y += tifis.velocidad;
		}
	}
	if(codigo == teclas.RIGHT)
	{
		if(tifis.x == 150 && tifis.y < 250)
		{
			
		}else if(tifis.x == 100 && tifis.y > 300 && tifis.y < 400)
		{

		}else if(tifis.x == 450) 
		{
			
		}else {
			tifis.x += tifis.velocidad;
		}
		
	}
	if(codigo == teclas.lEFT)
	{

		if(tifis.x == 250 && tifis.y < 250)
		{
			
		}else if(tifis.x == 150 && tifis.y > 150 && tifis.y < 250)
		{

		}else if(tifis.x == 0) 
		{
			
		}else {
			tifis.x -= tifis.velocidad;
		}
		
	}

	direccion = codigo;
	dibujar();
}

//confirmacion de fondo
function confirmarFondo()
{
	fondo.imagenOK = true;
	dibujar();
}
//confirmaciones de pulpo

function confirmarFrentePulpo()
{
	pulpo.frenteOK = true;
	dibujar();
}

function confirmarAtrasPulpo()
{
	pulpo.atrasOK = true;
	dibujar();
}

function confirmarIzqPulpo()
{
	pulpo.izqOK = true;
	dibujar();
}

function confirmarDerPulpo()
{
	pulpo.derOK = true;
	dibujar();
}

//confirmaciones de tifis

function confirmarFrente()
{
	tifis.frenteOK = true;
	dibujar();
}

function confirmarAtras()
{
	tifis.atrasOK = true;
	dibujar();
}

function confirmarDer()
{
	tifis.derOK = true;
	dibujar();
}

function confirmarIzq()
{
	tifis.izqOK = true;
	dibujar();
}

function dibujar()
{
	if(fondo.imagenOK == true)
	{
		tablero.drawImage(fondo.imagen, 0,0);
	}

	if(pulpo.frenteOK == true)
	{
		tablero.drawImage(pulpo.frente, pulpo.x, pulpo.y);
	}

	var PulpoDibujo = pulpo.frente;
	if(pulpo.frenteOK == true && pulpo.atrasOK == true && pulpo.izqOK == true && pulpo.derOK == true)
	{
		switch(numero)
		{
			case 1: PulpoDibujo = pulpo.atras;
				break;
			case 2: PulpoDibujo = pulpo.frente;
				break;
			case 3: PulpoDibujo = pulpo.der;
				break;
			case 4: PulpoDibujo = pulpo.izq;
				break;
		}

		tablero.drawImage(PulpoDibujo, pulpo.x, pulpo.y);

	} 

	var tifiDibujo = tifis.frente;
	if(tifis.frenteOK == true && tifis.atrasOK == true && tifis.derOK == true && tifis.izqOK == true)
	{
		if(direccion == teclas.UP)
		{
			tifiDibujo = tifis.atras;
		}
		if(direccion == teclas.DOWN)
		{
			tifiDibujo = tifis.frente;
		}
		if(direccion == teclas.lEFT)
		{
			tifiDibujo = tifis.izq;
		}
		if(direccion == teclas.RIGHT)
		{
			tifiDibujo = tifis.der;
		}

		tablero.drawImage(tifiDibujo, tifis.x, tifis.y);
	}
	
}

