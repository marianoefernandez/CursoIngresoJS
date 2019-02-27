function mostrar()
{
	var numero;
	var contador;
	contador=0;
	var acumulador;
	acumulador=0;

	while (contador<5) 
	{
		contador = contador + 1;
		numero = prompt ("ingrese un número");
		numero = parseInt (numero);
		acumulador = acumulador + numero;
	}	
	
	suma.value=acumulador;
	promedio.value=acumulador/5;


}//FIN DE LA FUNCIÓN