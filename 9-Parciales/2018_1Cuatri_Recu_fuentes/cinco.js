function mostrar()
{
	var dias;
	var mensaje;

	dias = prompt ("Ingrese un día de la semana (domingo, lunes, martes, miercoles, jueves, viernes, sábado)" , ""); 

	switch (dias)
		{
			case "domingo":
			case "sábado" :
				mensaje = " buen finde ";
				break;

			case "lunes":
			case "martes":
			case "miercoles":
			case "jueves":
			case "viernes":
				mensaje = " a trabajar ";
				break;

			default:
				mensaje = " no es un día hábil ";
				break; 	
		}
	
	alert (dias + ":"+ mensaje);


		
}

//Solo SWITCH pedir el ingreso de un día de la semana, si es fin de semana mostrar " buen finde", 
//si es día hábil “ a trabajar”, si no es un día valido, también informarlo, 
//Usar una sola ventana alert.

//Planteo del problema

//1-Variables de lo que necesito y lo que muestro
//2- prompt
//3- switch
//4- Todos los case / break;
//5- default del resto / break;
//6- alert (mensaje);