function mostrar()
{
	var dato1;
	var dato2;
	var dato3;
	var dato4;
	var mayor;
	var total;

	dato1 =  prompt ("ingrese un importe", "");
	dato1 = parseInt (dato1);
	dato2 =  prompt ("ingrese otro importe", "");
	dato2 = parseInt (dato2);
	dato3 =  prompt ("ingrese otro importe", "");
	dato3 = parseInt (dato3);
	dato4 =  prompt ("ingrese otro importe", "");
	dato4 = parseInt (dato4);

	total = dato1 + dato2 + dato3 + dato4;

	if (dato1 > dato2 && dato1 > dato3 && dato1 > dato4)
		{
			mayor = dato1;
		}
		else
		{
			if (dato2 > dato3 && dato2 > dato4)
			{
				mayor = dato2;
			}
			else
			{
				if (dato3 > dato4)
				{
					mayor = dato3;
				}
				else 
				{
					mayor = dato4;
				}
			}
		}
	if (total > 100)
	{
		total = total * 90 / 100;
	}
	else
	{	
		if (total > 50)
		{
			total = total * 95 / 100;
		}
		else
			{
				total = total + (total / 100 * 15);
			}

	}

	alert ("El mayor de la compra es: " + mayor + " y el total es: " + total);
}
//Un sistema que ingrese 4 importes, mostrar el mayor de la compra,
//después decir el total, si supera 100 pesos descuento del 10%
//si supera los 50$ es el 5%
//si es menos de 50$ se le suma el 15%
