/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso () 
{
	var edad;
	var sexo;
	var estadoCivil;
	var sueldoBruto;
	var legajo;
	var nacionalidad;
	var sexoIngresado;
	var estadoCivilIngresado;
	var nacionalidadIngresada;
	var contador = 0;

	while (contador < 1)
	{
		do
		{
			edad = prompt ("Ingrese una edad de 18 a 90");
			edad = parseInt (edad);

			if (isNaN (edad) || edad > 90 || edad < 18)
			{
				alert ("Por favor sólo ingrese una edad de 18 a 90 nomás");
			}
		}while (isNaN (edad) || edad > 90 || edad < 18);

		do
		{
			sexo = prompt ("Ingrese un sexo (F = Femenino M = masculino)");

			if (isNaN (sexo) == false || sexo != "F" && sexo != "M")
			{
				alert ("Por favor, sólo ingrese F o M");
			}
		}while (isNaN (sexo) == false || sexo != "F" && sexo != "M");

		do
		{
			estadoCivil = prompt ("Ingrese un EstadoCivil (1- Soltero, 2- Casados, 3- Divorciado , 4- Viudo)");
			estadoCivil = parseInt (estadoCivil);

			if (isNaN (estadoCivil) || estadoCivil < 1 || estadoCivil > 4)
			{
				alert ("Por favor sólo ingrese (1- Soltero, 2- Casado, 3- Divorciado , 4- Viudo)");
			}
		}while (isNaN (estadoCivil) || estadoCivil < 1 || estadoCivil > 4);

		do
		{
			sueldoBruto = prompt ("Ingrese un sueldo bruno (no menor a 8000 $)");
			sueldoBruto = parseInt (sueldoBruto);

			if (isNaN (sueldoBruto) || sueldoBruto < 8000)
			{
				alert ("Por favor, sólo ingrese un sueldo bruto no menor a 8000$");
			}
		}while (isNaN (sueldoBruto) || sueldoBruto < 8000);

		do
		{
			legajo = prompt ("Ingrese su legajo de cuatro cifras sin ceros en la izquierda");
			legajo = parseInt (legajo);

			if (isNaN (legajo) || legajo > 9999 || legajo < 1110)
			{
				alert ("Por favor sólo ingrese un legajo de cuatro cifras sin ceros a la izquierda");
			}
		}while (isNaN (legajo) || legajo > 9999 || legajo < 1110);

		do
		{
			nacionalidad = prompt ("Ingrese nacionalidad (A = Argentinos, E = Extranjeros , N = Nacionalizados");

			if (isNaN (nacionalidad) == false || nacionalidad != "A" && nacionalidad != "E" && nacionalidad != "N")
			{
				alert ("Por favor sólo introduzca A = Argentinos, E = Extranjeros , N = Nacionalizados");
			}
		}while (isNaN (nacionalidad) == false || nacionalidad != "A" && nacionalidad != "E" && nacionalidad != "N");
	
		if (sexo == "F")
		{
			sexoIngresado = "Femenino"
		}
		else
		{
			sexoIngresado = "Masculino";
		}

		if (estadoCivil == 1) 
		{
			estadoCivilIngresado = "Soltero";
		}
		else
		{
			if (estadoCivil == 2) 
			{
				estadoCivilIngresado = "Casado";
			}
			else
			{
				if (estadoCivil == 3) 
				{
					estadoCivilIngresado = "Divorciado";
				}
				else
				{
					estadoCivilIngresado = "Viudo";					
				}

			}
		}

		if (nacionalidad == "A") 
		{
			nacionalidadIngresada = "Argentino";
		}
		else
		{
			if (nacionalidad == "N") 
			{
				nacionalidadIngresada = "Nacionalizado";
			}
			else
			{
				if (nacionalidad == "E") 
				{
					nacionalidadIngresada = "Extranjero";
				}
			}
		}
	contador ++;
	}
	Edad.value = edad + " años";
	Sexo.value = sexoIngresado;
	EstadoCivil.value = estadoCivilIngresado;
	Sueldo.value = sueldoBruto + " $";
	Legajo.value = legajo;
	Nacionalidad.value = nacionalidadIngresada;
}
