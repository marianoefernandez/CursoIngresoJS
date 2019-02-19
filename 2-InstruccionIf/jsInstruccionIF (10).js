function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var numerorandom;
	var mensaje;

	numerorandom = Math.floor((Math.random() * 10) + 1);

	if (numerorandom > 8)
	{	{
			mensaje = ": EXCELENTE";
		}if (numerorandom >3)
			{
				mensaje = ": APROBO";
			}
	}
	alert (+numerorandom+mensaje);

}//FIN DE LA FUNCIÓN