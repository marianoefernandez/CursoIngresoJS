/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
	var largo;
	var ancho;
	var alambre;

	largo = Largo.value;
	largo = parseInt (largo);
	ancho = Ancho.value;
	ancho = parseInt (ancho);

	alambre = (largo + ancho) * (2) * 3;

	alert ("Se necesitan comprar: " + alambre + " metros de alambre"); 

}
function Circulo () 
{
	var radio;
	var alambre;

	radio = Radio.value;
	radio = parseInt (radio);

	alambre = radio * 3;

	alert ("Se necesitan comprar: " + alambre + " metros de alambre"); 

}
function Materiales () 
{
	var largo;
	var ancho;
	var cemento;
	var cal;

	largo = Largo.value;
	largo = parseInt (largo);
	ancho = Ancho.value;
	ancho = parseInt (ancho);

	cal = (largo + ancho) * (2) * 3;
	cemento = (largo + ancho) * (2) * 2

	alert ("Se necesitan comprar: " + cemento + " bolsas de cemento" + " y " + cal + " bolsas de cal" ); 
}


//Planteo del problema.

//1-Variables de lo que necesito y muestro;
//2-Variable= elId.value;
//3-parseInt;
//4-Operaciones necesarias;
//5-alert (verificando todo);