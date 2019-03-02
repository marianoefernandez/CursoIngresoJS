function mostrar()
{
	var numero1;
	var numero2;
	var suma;
	var resta;

	numero1 = prompt ("Ingrese un número" , "");
	numero1 = parseInt (numero1);
	numero2 = prompt ("Ingrese otro número" , "")
	numero2 = parseInt (numero2);

	if (numero1 == numero2)
		{
			alert (numero1 + " y " + numero2);
		}
		else
		{if (numero1 > numero2)	
			{
				resta = numero1 - numero2;
				alert (resta);
			}
			else	
			{if (numero1 < numero2)
				suma = numero2 + numero1;
				alert (suma);

			}
			if (suma>10)
			{
			alert ("la suma es " + suma + " y supero el 10"); 
			}

		}	
}		
	