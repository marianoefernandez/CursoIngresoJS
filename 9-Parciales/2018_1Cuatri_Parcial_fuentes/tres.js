function mostrar()
{
	var precio;
	var porcentaje;
	var precioFinal;

	precio = prompt ("Ingrese el precio ($)", "");
	precio = parseInt (precio);
	porcentaje = prompt ("Ingrese el % de descuento (%)", "");
	porcentaje = parseInt (porcentaje);

	precioFinal = precio - (precio * porcentaje / 100);

	elPrecioFinal.value = precioFinal + " $";
}
