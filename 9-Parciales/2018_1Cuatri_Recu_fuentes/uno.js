 
function mostrar()
{
	var ancho;
	var largo;
	var perímetro;

	ancho = prompt ("Ingrese el ancho (m)");
	ancho = parseInt (ancho);
	largo = prompt ("Ingrese el largo (m)");
	largo = parseInt (largo);

	perímetro = (ancho + largo) * 2;

	alert ("El perímetro es de " + perímetro + " metros");
}

//Objetivo: Realizar el algoritmo que  pida el ancho y el largo de un rectángulo  por prompt y que muestre el 
//perímetro por alert

//Planteo del problema.

//1- Variables de datos que necesito y muestro
//2- prompt 
//3- parseInt
//4- Operaciones
//5- Alert
