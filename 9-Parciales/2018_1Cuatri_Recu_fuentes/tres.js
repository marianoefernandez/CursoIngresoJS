function mostrar()
{
	var precio;
	var porcentaje;
	var precioFinal;

	precio = prompt ("Ingrese el precio ($)");
	precio = parseInt (precio);
	porcentaje = prompt ("Ingrese el porcentaje (%)");
	porcentaje = parseInt (porcentaje);

	precioFinal = precio - (precio * porcentaje / 100);

	elPrecioFinal.value = precioFinal + " $";
}
//Pedir por prompt el precio y el porcentaje de descuento, mostrar el precio final con descuento por id.

//Planteo del problema.

//1- Variables de datos que necesito y muestró
//2- prompt 
//3- parseInt
//4- x2
//5- Operacion/es
//6- elId = Variable