function mostrar()
{
	var planetas;
	var mensaje;

	planetas = prompt ("Ingrese un planeta del sitema solar (mercurio, venus, tierra, marte, jupiter, saturno, urano o neptuno");

	switch (planetas)
	{
		case "mercurio":
		case "venus":
			mensaje = "acá hace más calor";
			break;

		case "tierra":
			mensaje = "acá vivimos";
			break;

		case "marte":
		case "jupiter":
		case "saturno":
		case "urano":
		case "neptuno":
			mensaje = "acá hace más frío";
			break;

		default: 
			mensaje = "no es un planeta valido";
			break;			
	}

	alert (mensaje);
}

//pedir el ingreso de un planeta del sistema solar. Si es la tierra mostrar "acá vivimos". 
//Si está más cerca del sol, "acá hace más calor". Si está más lejos del sol, "acá hace más frio". 
//Si no es un planeta valido informarlo.
//Aclaración: los planetas se ingresan en minúscula (Mercurio y Venus están antes que la tierra).

//Planteo del problema

//1-Variables de lo que necesito y lo que muestro
//2- prompt
//3- switch
//4- Todos los case / break;
//5- default del resto / break;
//6- alert (mensaje);