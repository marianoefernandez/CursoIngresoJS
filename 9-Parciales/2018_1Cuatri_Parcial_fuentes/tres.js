function mostrar()
{
	var precio;
	var descuento;

	precio = prompt ("Ingrese el precio ($)");
	precio = parseInt (precio);
	descuento = prompt ("Ingrese el porcentaje de descuento (%)");
	descuento = parseInt (descuento);

	elPrecioFinal.value = (precio - precio * descuento / 100) + " $";
}
//Pedir por prompt el precio y el porcentaje de descuento, mostrar el precio final con descuento por id.

//Planteo del problema.

//1- Variables de datos que necesito y muestró
//2- prompt 
//3- parseInt
//4- x2
//5- Operacion/es
//6- elId = Variable