/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	/* PRIMER COMANDO DE CONSOLA        */
	var elimporte;
	var elresultado; 
	var porciento25;
	var descuento;	

	elimporte = importe.value;
	elimporte = parseInt (elimporte);

	porciento25 = elimporte/4;
	descuento = elimporte - porciento25;

	elresultado = parseInt (descuento);
	resultado.value = elresultado;
}
