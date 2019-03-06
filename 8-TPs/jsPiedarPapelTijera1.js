/*Al comenzar el juego generaremos un número 
RANDOM del 1 al 3 para la selección de la máquina, 
siendo 1 para “piedra”, el 2 para “papel” y 3 para “tijera”.
El jugador seleccionará una imagen correspondiente 
a su opción  y le informaremos si ganó, empató o perdió.
*/
	var numeroRandom;
	var mensaje;

function comenzar()
{

	numeroRandom = Math.floor(Math.random() * 4;


}//FIN DE LA FUNCIÓN
function piedra()
{

	if (numeroRandom == 1) 
	{
		mensaje = "El contrario eligio piedra por ende Empató";
	}

	if (numeroRandom == 2) 
	{
		mensaje = "El contrario eligio papel por ende Perdió";
	}

	if (numeroRandom == 3) 
	{
		mensaje = "El contrario eligio tijera por ende Ganó";
	}

	alert (mensaje);
	
}//FIN DE LA FUNCIÓN
function papel()
{

	if (numeroRandom == 1) 
	{
		mensaje = "El contrario eligio piedra por ende Ganó";
	}

	if (numeroRandom == 2) 
	{
		mensaje = "El contrario eligio papel por ende Empató";
	}

	if (numeroRandom == 3) 
	{
		mensaje = "El contrario eligio tijera por ende Perdió";
	}

	alert (mensaje);

}//FIN DE LA FUNCIÓN
function tijera()
{
		
	if (numeroRandom == 1) 
	{
		mensaje = "Perdió";
	}

	if (numeroRandom == 2) 
	{
		mensaje = "El contrario eligio papel por ende Ganó";
	}

	if (numeroRandom == 3) 
	{
		mensaje = "El contrario eligio tijera por ende Empató";
	}

	alert (mensaje);

}//FIN DE LA FUNCIÓN

