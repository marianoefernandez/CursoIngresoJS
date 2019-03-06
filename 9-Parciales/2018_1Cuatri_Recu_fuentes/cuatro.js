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
		resultado = numero1 / numero2;
	}

	if (numero2 > numero1)
	{
		resultado = numero2 + numero1;
	}

	alert (resultado);

	if (resultado < 50 && numero1 < numero2) 
	{
		alert ("la suma es " + resultado + " y es menor a 50");
	}
}		
//(IF)Pedir dos números y mostrar el resultado: Si son iguales los muestro concatenados.
//Si el primero es mayor, los divido, de lo contrario los sumo. 
//Si la suma es menor a 50 ,además de mostrar el resultado, muestro el mensaje:
//"la suma es xxx y es menor a 50".

//Planteo del problema 

//1- Variables que necesito y muestro
//2- prompt
//3- parseInt
//4- if/else 
//5 alert 1
//6 if final (alert final)