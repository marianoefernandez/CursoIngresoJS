/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	var elsueldo;
	var elresultado;
	var diezporciento;

	elsueldo = sueldo.value;
	elsueldo = parseInt (elsueldo);

	diezporciento = elsueldo / 10;
	elresultado = elsueldo + diezporciento;
	
	resultado.value = elresultado
}
