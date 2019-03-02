function mostrar()
{
	var planetas;
	var mensaje;

	planetas = prompt ("Ingresa un planeta del sistema solar (mercurio, venus, tierra, marte, júpiter, saturno, urano y neptuno)" , "");

	switch (planetas)
		{	
			case "mercurio":
			case "venus":
				mensaje = "acá hace más calor.";
				break;

			case "tierra":
				mensaje = "acá vivimos.";
				break;

			case "marte":
			case "júpiter":
			case "saturno":
			case "urano":
			case "neptuno":	
				mensaje = "acá hace más frío.";
				break;

			default:
				mensaje = "no es un planeta valido."	
		}

	alert (mensaje);	
}
