function mostrar()
{
	var letra;
	var numero;
	var letraDelMaximo;
	var letraDelMinimo;
	var numeroMaximo;
	var numeroMinimo;
	var cantidadPar = 0;
	var cantidadImpar = 0;
	var cantidadCeros = 0;
	var promedioPositivos;
	var sumaPositivos = 0;
	var sumaNegativos = 0;
	var contador = 0;
	var continuar = true;
	var cantidadPositivos = 0;

	while (continuar == true)
	{
		do
		{
		letra = prompt("Ingrese una letra");
			if (isNaN(letra) == false || letra.length != 1)
			 {
			 	alert("Ingrese solo una letra");
			 }
		}while (isNaN(letra) == false || letra.length != 1);

		do
		{
		numero = prompt("Ingrese un numero");
		numero = parseInt(numero);

			if (isNaN(numero) || numero < (-100) || numero > 100)
			 {
			 	alert("Ingrese solo numeros del -100 al 100")
			 }
		} while(isNaN(numero) || numero < (-100) || numero > 100);

		if (numero%2 == 0)
	 	 {
	 		cantidadPar ++;
	 	 }
	 	else
	 	 {
	 		cantidadImpar++;
	 	 }
	 	if (numero == 0)
	 	 {
	 	 	cantidadCeros ++;
	 	 }
	 	if (numero > 0)
	 	 {
	 	 	sumaPositivos += numero;
	 	 	cantidadPositivos ++;
	 	 }
	 	 else
	 	  {sumaNegativos
	 	  	sumaNegativos += numero;
	 	  }
	 	if (contador == 0)
	 	 {
	 	 	letraDelMinimo = letra;
	 	 	letraDelMaximo = letra;
	 	 	numeroMinimo = numero;
	 	 	numeroMaximo = numero;
	 	 	contador = 1;
	 	 }
	 	 else
	 	 {
	 	 	if (numero > numeroMaximo)
	 	 	 {
	 	 	 	numeroMaximo = numero;
	 	 	 	letraDelMaximo = letra;
	 	 	 }
	 	 	if (numero < numeroMinimo)
	 	 	 {
	 	 	 	numeroMinimo = numero;
	 	 	 	letraDelMinimo = letra;
	 	 	 }
	 	 }

		continuar = confirm("¿Desea continuar?");
	}

	promedioPositivos = sumaPositivos/cantidadPositivos;

	document.write(numero + " " + letra);
	document.write("<br>Cantidad par = " + cantidadPar + ". Cantidad Impar = " + cantidadImpar);
	document.write("<br>Cantidad de 0 = " + cantidadCeros);
	document.write("<br>Promedio de los positivos = " + promedioPositivos);
	document.write("<br>Suma de los negativos = " + sumaNegativos);
	document.write("<br>Letra y numero maximos = " + letraDelMaximo + " " + numeroMaximo + ". Letra y numero minimos = " + letraDelMinimo + " " + numeroMinimo);
}