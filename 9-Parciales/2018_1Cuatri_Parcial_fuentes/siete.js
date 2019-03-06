function mostrar()
{
	var nota;
	var sexo;
	var sexoNotaMasBaja
	var promedio;
	var acumulador = 0;
	var notaMasBaja;
	var cantidadVaronesNota6 = 0;
	var contador = 0;
	var sexoValidadoNotaMasBaja;

	while (contador < 5)
	{
		do
		{
			nota = prompt ("Ingrese una nota del 0 al 10");
			nota = parseInt (nota);

			if (isNaN (nota) || nota > 10 || nota < 0)
			{
				alert ("Por favor sólo ingrese una nota del 0 al 10");
			}
		}while (isNaN (nota) || nota > 10 || nota < 0);

		do
		{
			sexo = prompt ("Ingrese su sexo f = femenino m = masculino");

			if (isNaN (sexo) == false || sexo != "f" && sexo != "m") 
			{
				alert ("Por favor sólo ingrese f o m");
			}
		}while (isNaN (sexo) == false || sexo != "f" && sexo != "m")

		acumulador = acumulador + nota;

		if (contador == 0)
		{
			notaMasBaja = nota;
			sexoNotaMasBaja = sexo;
		}
		else
		{
			if (notaMasBaja > nota) 
			{
				notaMasBaja = nota;
				sexoNotaMasBaja = sexo;
			}
			if (sexoNotaMasBaja == "m") 
				{
					sexoValidadoNotaMasBaja = "masculino";
				}
				else
				{
					sexoValidadoNotaMasBaja = "femenino";
				}
		}

		if (nota > 5 && sexo == "m") 
		{
			cantidadVaronesNota6 ++;
		}

		contador ++;
	}

	promedio = acumulador / contador;

	alert ("El promedio de las notas totales es de " + promedio + "/10" + ". La nota más baja es un: " + notaMasBaja + " y pertenece al sexo: " + sexoValidadoNotaMasBaja + ". La cantidad de varones en la que su nota es mayor o igual a 6 es de: " + cantidadVaronesNota6 + " varones.");
}

//Realizar el algoritmo que permita el ingreso por prompt de las notas (validar entre 0 y 10) ,
//el sexo (validar el sexo “f” o “m”) de 5 alumnos, informar por alert: a) El promedio de las notas totales. 
//b) La nota más baja y el sexo de esa persona. 
//c) La cantidad de varones que su nota haya sido mayor o igual a 6.

//Planteo del problema

//1- Variables de lo que necesito ingresar/mostrar (acumulador/contador/etc)
//2- {"Abro llave principal". While principal/contador 
//3- do {prompt/parseInt
//4- if (error) 
//5- }while (error);
//6- x2
//7- if (cantidad de x que pide)
//8- if/else/if (menor/mayor/dato/etc) 
//9- acumulador/contador. "Cierro la llave del while principal}
//10- Últimas operaciones y alert