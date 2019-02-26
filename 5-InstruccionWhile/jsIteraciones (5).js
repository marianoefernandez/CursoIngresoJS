function mostrar()
{

	var elSexo 
	elSexo = prompt("ingrese si usted es una persona de sexo femenino o de sexo masculino (f ó m) .");
	while (elSexo != "f" && elSexo != "m" && elSexo != "F" && elSexo != "M")
	{
		
		elSexo = prompt ("sexo incorrecto ingrese por favor si es (f ó m)")

	}

	if (elSexo == "f" || elSexo == "F")
		{
			elSexo = "femenino"
			Sexo.value = elSexo;
		}
		else
		{
			elSexo = "masculino"
			Sexo.value = elSexo
		}	



}//FIN DE LA FUNCIÓN