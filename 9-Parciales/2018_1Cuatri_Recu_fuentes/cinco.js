function mostrar()
{
	var habitación;
	var mediodepago; 
	var preciototal; 
	var descuento;
	var total;
	var paquetes


	habitación = prompt ("Elija su habitación: (1- Cuesta 100$ y no tiene tv 2- Cuesta 300$ y tiene tv 3- cuesta 500$ y tiene 2 tv, equipo de musica, pc y lavarropas"  , "");
	habitación = parseInt (habitación);
	mediodepago = prompt ("Elija el tipo de pago (1-Efectivo 2-Visa 3-Paypal 4-MercadoPago 5-Otro", ""); 
	switch (mediodepago)
	{
		case 1:
			descuento = 20
			paquetes = prompt ("Ha pagado en efectivo puede seleccionar los siguientes paquetes con un descuento 1-Solodesayunos (100$ +10% al descuento total), 2-todoincluido (200$ +15% de descuento), 3-Paquete de bebida, (100$) 4- No quiero paquete", "");
			break;
		case 3:
			descuento = 15
			paquetes = prompt ("Ha pagado con Paypal Seleccione los siguientes paquetes 1-Solodesayunos (100$), 2-todoincluido (200$  +10% de descuento total), 3-Paquete de bebida (100$) 4-No quiero paquete", "");
			break;	
		case 2:
		case 4:
			descuento = 10
			paquetes = prompt ("Seleccione los siguientes paquetes 1-Solodesayunos (100$), 2-todoincluido (200$), 3-Paquete de bebida (100$) 4-No quiero paquete", "");
			break;	
		case 5:	
			descuento = 5
			paquetes = prompt ("Seleccione los siguientes paquetes 1-Solodesayunos (100$), 2-todoincluido (200$), 3-Paquete de bebida (100$) 4-No quiero paquete", "");
			break;	
	}		

	switch (habitación)
		{
			case 1:
			habitación = 100
			case 2:
			habitación = 300
			case 3:
			habitación = 500
		}
	switch (mediodepago)
		{
			case 1:
			descuento = 20
			case 2:
			case 4:
			descuento = 10
			case 5: 
			descuento = 5
			case 3
			descuento = 15
		}
	

}
/* USAR SOLO SWITCH
cada habitación de un hotel tiene un precio, hay promociones según el tipo de pago, si es con tarjeta visa un 10%,
efectivo 20% otro medio 5%.
Si compraste el paquete "todoincluido" y pagas con Paypal se te suma un 10% al descuento 
si pagas en efectivo tenes varias opciones, el paquete "soloDesayunos" te suma un 10% al descuento, si el paquete 
es "todoincluido" te suma un 15% y para el resto de los paquetes no tiene descuento adicional.
