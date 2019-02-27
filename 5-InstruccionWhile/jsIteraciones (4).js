function mostrar()
{

	var numero
	numero = prompt("ingrese un número entre 0 y 9.");
	numero = parseInt (numero);

	while (numero>9 || numero<0)
		{
			numero = prompt ("Numero incorrecto, ingrese un número de nuevo");
			numero = parseInt (numero)
		}

	alert ("Número ingresado correcto");
}//FIN DE LA FUNCIÓN