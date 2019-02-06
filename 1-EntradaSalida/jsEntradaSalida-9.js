/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	var elsueldo;
	var elresultado; 
	var porciento10;
	var aumento;	

	elsueldo = sueldo.value;
	elsueldo = parseInt (elsueldo);

	porciento10 = elsueldo/10;
	aumento = elsueldo + porciento10;

	elresultado = parseInt (aumento);
	resultado.value = elresultado;
	}
