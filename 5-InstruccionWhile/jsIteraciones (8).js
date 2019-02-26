function mostrar()
{
	var numero;
	var contador
	var positivo
	var negativo
	var respuesta
	var acumulador

	contador = 0 
	positivo = 0
	negativo = 1

	do 
	{
		numero = prompt ("Ingrese un número");
		numero = parseInt (numero);
		respuesta = prompt ("Queres seguir pidiendo números (si o no)");
		positivo = numero

	if (numero > -1)
		{
			numero = positivo
			acumulador = acumulador + numero
			contador++;
		}
		else
		{
			numero = negativo
			acumulador = acumulador
		}
	}
 		

	while (respuesta == "si") 
	{
		contador = contador + 1;
		numero = prompt ("ingrese otro número");
		numero = parseInt (numero);
		respuesta = prompt ("Queres seguir pidiendo números (si o no)");
		positivo = positivo + numero;
		negativo = negativo * numero;
	}	

	
	suma.value=positivo;
	producto.value=negativo;

}//FIN DE LA FUNCIÓN
