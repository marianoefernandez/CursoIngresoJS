function mostrar()
{
	var letra;
	var numero;
	var contador = 0;
	var cantidadPares = 0;
	var cantidadImpares = 0;
	var cantidadCeros = 0;
	var cantidadPositivos = 0;
	var sumaPositivos = 0; 
	var sumaNegativos = 0;
	var promedio;
	var numeroDelMaximo;
	var numeroDelMinimo;
	var letraDelMaximo;
	var letraDelMinimo;
	var continuar = true;

	while (continuar == true)
	{
		do
		{
			letra = prompt ("Ingrese una letra");

			if (isNaN (letra) == false || letra.length != 1)
			{
				alert ("Por favor sólo ingrese una letra");
			}
		}while (isNaN (letra) == false || letra.length != 1);

		do
		{
			numero = prompt ("Ingrese un número del -100 al 100");
			numero = parseInt (numero);

			if (isNaN (numero) || numero < -100 || numero > 100)
			{
				alert ("Por favor sólo ingrese un número del -100 al 100");
			}
		}while (isNaN (numero) || numero < -100 || numero > 100);

		if (numero % 2 == 0 && numero != 0) 
		{
			cantidadPares ++;
		}

		if (numero % 2 == 1)
		{
			cantidadImpares ++;
		}

		if (numero == 0) 
		{
			cantidadCeros++;
		}

		if (numero < 0) 
		{
			sumaNegativos = sumaNegativos + numero;
		}
		else
		{
			if (numero > 0) 
			{
				sumaPositivos = sumaPositivos + numero;
				cantidadPositivos ++;
			}

		}

		if (contador == 0) 
		{
			numeroDelMinimo = numero;
			numeroDelMaximo = numero;
			letraDelMinimo = letra;
			letraDelMaximo = letra;
			contador = 1;
		}
		else
		{
			if (numeroDelMaximo < numero) 
			{
				numeroDelMaximo = numero;
				letraDelMaximo = letra;
			}
			else
			{
				if (numeroDelMinimo > numero)
			{
				numeroDelMinimo = numero;
				letraDelMinimo = letra;
			}

			}

		}

		continuar = confirm ("¿Desea continuar?");
	}
	promedio = sumaPositivos / cantidadPositivos;

	document.write ("La cantidad de pares es de: " + cantidadPares);
	document.write ("<br>La cantidad de impares es de: " + cantidadImpares);
	document.write ("<br>La cantidad de ceros es de: " + cantidadCeros);
	document.write ("<br>El promedio de todos los números positivos ingresados es de: " + promedio);
	document.write ("<br>La suma de todos los números negativos es de: " + sumaNegativos);
	document.write ("<br>El número del máximo es: " + numeroDelMaximo + ", su letra es la: " + letraDelMaximo + ". El número del minimo es: " + numeroDelMinimo + " y su letra es la: " + letraDelMinimo);
}
//Realizar el algoritmo que permita iterar el ingreso de dos datos, una letra y un número entre -100 y 100 
//(validar) hasta que el usuario quiera e informar al terminar el ingreso por document.write: 
//a) La cantidad de números pares. //b) La cantidad de números impares. c) La cantidad de ceros. 
//d) El promedio de todos los números positivos ingresados. e) La suma de todos los números negativos. 
//f) El número y la letra del máximo y el mínimo.

//Planteo del problema

//1- Variables de lo que necesito ingresar/mostrar (acumulador/contador/etc)
//2- {"Abro llave principal". While principal/continuar 
//3- do {prompt 
//4- if (error/letra.length) 
//5- while (error)
//6- x2
//7- if/else (de cada operacion necesaria)
//8- continuar = confirm. Cierro la llave principal}
//9- Operaciones restantes
//10- Document.write

