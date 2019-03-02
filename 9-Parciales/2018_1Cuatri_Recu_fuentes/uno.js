
function mostrar()
{
	var ancho;
	var largo;
	var perimetro;

	ancho = prompt ("Ingrese el ancho del rectángulo (m) " , "");
	ancho = parseInt (ancho);
	largo = prompt ("Ingrese el largo del rectángulo (m) " , "");
	largo = parseInt (largo);

	perimetro = (ancho + largo) * 2;

	alert ("El perímetro del rectangulo es de " + perimetro + " metros");
}

//Objetivo: Realizar el algoritmo que  pida el ancho y el largo de un rectángulo  por prompt y que muestre el 
//perímetro por alert

//Planteo del problema.

//1- Variables de datos que necesito y muestro
//2- prompt 
//3- parseInt
//4- Operaciones
//5- Alert
