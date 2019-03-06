function mostrar()
{
	var numero1;
	var numero2;
	var resultado;

	numero1 = prompt ("Ingrese un número");
	numero1 = parseInt (numero1);
	numero2 = prompt ("Ingrese otro número");
	numero2 = parseInt (numero2);

	if (numero1 == numero2) 
	{
		resultado = numero1 + " y " + numero2;
	}

	if (numero1 > numero2) 
	{
		resultado = numero1 - numero2;
	}

	if (numero1 < numero2) 
	{
		resultado = numero2 + numero1;
	}
	
	alert (resultado);

	if (resultado > 10 && numero1 < numero2)
	{
		alert ("La suma es " + resultado + " y supero el 10");
	}
}		
	
//Pedir dos números y mostrar el resultado: Si son iguales los muestro concatenados. 
//Si el primero es mayor, los resto, de lo contrario los sumo. 
//Si la suma es mayor a 10 ,además de mostrar el resultado, muestro el mensaje 
//"la suma es xxx y supero el 10".

//Planteo del problema 

//1- Variables que necesito y muestro
//2- prompt
//3- parseInt
//4- if/else 
//5 alert 1
//6 if final (alert final)	