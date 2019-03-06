/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
 	var lamparas;
 	var marca;
 	var cantidad;
 	var descuento;
 	var precioFinal;
 	var impuesto;
 	var mensaje;

 	lamparas = 35
	cantidad = Cantidad.value;
	cantidad = parseInt (cantidad);
	marca = LaMarca.value;
	precioFinal = 35 * cantidad

	if (cantidad < 3)
	{
		mensaje = "El precio sin descuento es de ";
		
	}

 	if (cantidad>=6) 
 	{
 		descuento = 50;
 		mensaje = "El precio final con un descuento del " + descuento + "% es ";
 	}

 	if (cantidad>=5 && marca == "ArgentinaLuz")
 	{
 		descuento = 40;
 		mensaje = "El precio final con un descuento del " + descuento + "% es "
 	}
 	else
 	{
 		descuento = 30;
 		mensaje = "El precio final con un descuento del " + descuento + "% es "
 	}

 	if (cantidad>=4 && marca == "ArgentinaLuz" || "“FelipeLamparas”")
 	{
 		descuento = 25;
 		mensaje = "El precio final con un descuento del " + descuento + "% es "
 	}
 	else
 	{
 		descuento = 20;
 		mensaje = "El precio final con un descuento del " + descuento + "% es "
 	}

 	if (cantidad>=3 && marca == "ArgentinaLuz")
 	{
 		descuento = 15;
 		mensaje = "El precio final con un descuento del " + descuento + "% es "
 	}
 	else
 	{
 		if (marca == "“FelipeLamparas”") 
 		{
 			descuento = 10;
 			mensaje = "El precio final con un descuento del " + descuento + "% es "
 		}
 		else
 		{
 			descuento = 5;
 			mensaje = "El precio final con un descuento del " + descuento + "% es "
 		}	
 	}

 	precioFinal = precioFinal * descuento / 100;

 	alert (mensaje + precioFinal + "$");
}



//Planteo del problema.

//