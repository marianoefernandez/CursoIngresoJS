/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	var elimporte;
	var elresultado;
	var porciento25;

	elimporte = importe.value;
	elimporte = parseInt (elimporte);

	porciento25 = elimporte / 4;
	elresultado = elimporte - porciento25;
	
	resultado.value = elresultado;
}
