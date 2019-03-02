function mostrar()
{
	var nota;
	var acumulador;
	var contador;
	var sexo;
	var cantidadVarones6;
	var promedio;
	var sexoNotaMasBaja;
	var notaMasBaja;

	acumulador = 0;
	contador = 0;
	cantidadVarones6 = 0;


	while(contador < 5)
	{
		do  {
		nota = prompt("Ingrese una nota");
		nota = parseInt(nota);

			if (isNaN(nota))
		 	{
		 		alert("No es un número valido");
			}
			if (nota < 0 || nota > 10)
			{
				alert("Ingrese un número del 0 al 10");
			}
			} while (isNaN(nota) || nota < 0 || nota > 10);	

		do
		{
		sexo = prompt("Ingrese su sexo (f = femenino, m = masculino)")

			if (isNaN(sexo) == false || sexo != "f" || sexo != "m")
			{
			 	alert("Ingrese solo f o m (f = femenino, m = masculino) " + sexo );
			}
			}while (isNaN(sexo) == false || sexo != "f" && sexo != "m");

		if (sexo == "m" && nota >=6)
		 {
		 	cantidadVarones6 ++;
		 }

		if (contador==0)
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
		acumulador += nota;
		contador ++;
	}

	promedio = acumulador/5;

	alert("El promedio de las notas es de  " + promedio + "/10" + ". La nota mas baja es " + notaMasBaja + ", el sexo de la nota mas baja = " + sexoNotaMasBaja + ", la cantidad de varones con nota mayor a 6 son " + cantidadVarones6);
}


