function mostrar()
{
	var nota;
	var sexo;
	var promedio;
	var notaMasBaja;
	var sexoNotaMasBaja;
	var cantidadVarones6 = 0;
	var contador = 0;
	var acumulador = 0;

	while (contador < 5)
	{
		do
		{
		nota = prompt ("Ingrese una nota del 0 al 10" , "");
		nota = parseInt (nota);

			if (nota < 0 || nota > 10)
				{ 
					alert ("Por favor ingrese un número del 0 al 10");
				}
				if (isNaN (nota)) 
				{
					alert ("Por favor ingrese un número valido");
				}
		}while (isNaN(nota) || nota < 0 || nota > 10);	

			do
			{
			sexo = prompt ("Ingrese el sexo (f = femenino ó m = masculino)" , "");

			if (isNaN(sexo) == false || sexo != "f" && sexo != "m")
				{
					alert ("Por favor ingrese sólo f ó m (f = femenino ó m = masculino)");
				}						
		}while (isNaN(sexo) == false || sexo != "f" && sexo != "m");

			if (sexo == "m" && nota > 5)
			{	
				cantidadVarones6 ++;
			}		

			if (contador == 0) 
			{
				notaMasBaja = nota;
				sexoNotaMasBaja = sexo;
			}
			else
			{
				if (nota < notaMasBaja) 
				{
					notaMasBaja = nota;
					sexoNotaMasBaja = sexo;
				}

			}
			acumulador = acumulador + nota;
			contador ++;
	}

	promedio = acumulador / 5;

	alert ("El promedio de las notas totales es " + promedio + "/10" + " La nota más baja es un: " + notaMasBaja + " pertenece al sexo: " + sexoNotaMasBaja + " y la cantidad de varones en la que su nota fue mayor o igual a 6 es de: " + cantidadVarones6 + " varones.");

}
//Realizar el algoritmo que permita el ingreso por prompt de las notas (validar entre 0 y 10) ,
//el sexo (validar el sexo “f” o “m”) de 5 alumnos, informar por alert: 
//a) El promedio de las notas totales. 
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
