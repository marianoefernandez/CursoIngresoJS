/*En esta oportunidad el juego evaluará tus
 aptitudes a partir de la cantidad de intentos, 
 por lo cual se informará lo siguiente:
1° intento: “usted es un Psíquico”.
2° intento: “excelente percepción”.
3° intento: “Esto es suerte”.
4° intento: “Excelente técnica”.
5° intento: “usted está en la media”.
Desde  6 Intentos hasta 10:”falta técnica”
Más de 10 intentos: “afortunado en el amor!!”.*/

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

	if (numeroIngresado == numeroSecreto && ) 
	{
		mensaje = "Usted es Psíquico";
		contadorIntentos = contadorIntentos - contadorIntentos;
	}
	
	alert (mensaje);
}

//Math.floor(Math.random()