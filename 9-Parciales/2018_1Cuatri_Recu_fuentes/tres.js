function mostrar()
{
	var precio;
	var porcentaje;

	precio = prompt ("Ingrese un precio ($)" , "");
	precio = parseInt (precio); 
	porcentaje = prompt ("Ingrese un porcentaje de descuento (%)" , "");
	porcentaje = parseInt (porcentaje);

	elPrecioFinal.value = precio - (precio * porcentaje / 100) + " $ ";
}
//Pedir por prompt el precio y el porcentaje de descuento, mostrar el precio final con descuento por id.

//Planteo del problema.

//1- Variables de datos que necesito y muestró
//2- prompt 
//3- parseInt
//4- x2
//5- Operacion/es
//6- elId = Variable