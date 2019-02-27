function mostrar()
{

	var numero;
	var contador;
	var acumulador;
	var respuesta;
	
	contador=1;
	acumulador=0;

	numero = prompt ("ingrese un número");
	numero = parseInt (numero);
	respuesta = prompt ("Queres seguir pidiendo números (si o no)");
	acumulador = numero; 

	while (respuesta == "si") 
	{
		contador = contador + 1;
		numero = prompt ("ingrese otro número");
		numero = parseInt (numero);
		respuesta = prompt ("Queres seguir pidiendo números (si o no)");
		acumulador = acumulador + numero;
	}	
	
	suma.value=acumulador;
	promedio.value=acumulador/contador;

}//FIN DE LA FUNCIÓN