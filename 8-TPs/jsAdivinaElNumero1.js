/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/
var numeroSecreto; 
var contadorIntentos = 0;
var numeroIngresado;
var mensaje;

function comenzar()
{
	numeroSecreto = Math.floor(Math.random() * 101);
	console.log (numeroSecreto);

	alert ("Arranca el juego");
	//Genero el número RANDOM entre 1 y 100
	//alert(numeroSecreto )
}

function verificar()
{
	numeroIngresado = numero.value;


	if (numeroIngresado != numeroSecreto || numeroIngresado == numeroSecreto)
	{
		contadorIntentos ++;
	}

	intentos.value = contadorIntentos + " intentos";

	if (numeroIngresado > numeroSecreto) 
	{
		mensaje = "se paso";
	}
	else
	{
		mensaje = " falta...";
	}

	if (numeroIngresado == numeroSecreto) 
	{
		mensaje = "Usted es un ganador, y en solo " + contadorIntentos + " intentos";
		contadorIntentos = contadorIntentos - contadorIntentos;
	}
	
	alert (mensaje);
}