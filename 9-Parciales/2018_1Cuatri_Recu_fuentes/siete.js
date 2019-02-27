function mostrar()
{
	var contador;
	var nota;
	var sexo;
	var acumulador;
	var promedio;
	var notaMasBaja;
	var sexoNotamasBaja;
	var cantidadVarones;
	contador = 0;
	acumulador = 0;
	cantidadVarones = 0;
		
	while (contador <5)
		{
			nota = prompt ("Ingrese la nota que se saco (1 al 10)");
			nota = parseInt (nota);	

			while (isNaN (nota) == true || nota)
			{
				nota = prompt ("Nota mal ingresada, intentelo de nuevo");
				nota = parseInt (nota);
			}

			sexo = prompt ("Ingrese su sexo (f ó m)");
			
			while ( sexo != "f" && sexo != "m" && elSexo != "F" && elSexo != "M" && isNan (sexo) == false || sexo )
			{	
				sexo = prompt ("Sexo mal ingresado, ingrese (f o m)");	
			}	
			contador = contador + 1;			
		}

	acumulador = acumulador + nota;	
	promedio = 	acumulador / 5;

	if (contador == 0)
		{
			notaMasBaja = nota;
			sexoNotamasBaja = sexo;
		}
		else
		{
			if (notaMasBaja > nota)
			{
				notaMasBaja = nota;
				sexoNotamasBaja = sexo;
			}
			else
			{	
				if (sexo == "f" && sexo == "F")
				{
					sexo = "Femenino"
				}
				else 
				{
					"masculino"
				} 
			}

		}	

		if (nota > 5 && sexo == m && sexo == M)
		{
			cantidadVarones = cantidadVarones + 1
		}
	alert ("El promedio de las cinco notas es de " + promedio + " La nota más baja es " + notaMasBaja + ", su sexo es " + sexoNotamasBaja + " y la cantidad de varones en donde su nota es mayor a 6 es de " + cantidadVarones);		
}

	