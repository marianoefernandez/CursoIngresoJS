function mostrar()
{
	var precio;
	var porcentaje;
	var preciofinal;

	precio = prompt ("Ingrese un precio inicial ($) ","");
	precio = parseInt (precio);
	porcentaje = prompt ("Ingrese su descuento (%) ","");
	porcentaje = parseInt (porcentaje);

	preciofinal = precio - (precio * porcentaje / 100);

	elPrecioFinal.value = preciofinal; 
}
