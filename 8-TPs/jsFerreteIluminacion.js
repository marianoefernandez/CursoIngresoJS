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
 	var lamparascantidad;
 	var descuento;
 	var LaMarca; 
 	var precioBruto;
 	var precioDescuento;

 	lamparascantidad = Cantidad.value;
 	LaMarca = Marca.value;
 	precioBruto = lamparascantidad * 35;
 	console.log (+precioBruto);

 	if (lamparascantidad>5)
 	{
 		descuento=precioBruto*50/100;
 		precioDescuento = precioBruto-descuento;
 		console.log (precioDescuento);
 	}	
 	else
 {


 	if (lamparascantidad == 5) 
 	{
 		if (LaMarca=="ArgentinaLuz")
 		{
 			descuento=precioBruto*40/100;
 			precioDescuento = precioBruto-descuento;
 			console.log (precioDescuento);
 		}
 		else
 		{
 			descuento=precioBruto*30/100;
 			precioDescuento = precioBruto-descuento;
 			console.log (precioDescuento);
 		}// if (lamparascantidad == 5) 
 
 	}
 	else
 	{
 		if (lamparascantidad == 4) 
 	{
 			if (LaMarca == "ArgentinaLuz" || LaMarca == "FelipeLamparas")
			{
				descuento=precioBruto*25/100;
 				precioDescuento = precioBruto-descuento;
 				console.log (precioDescuento);
			}
		else
		{
			descuento=precioBruto*20/100;
 			precioDescuento = precioBruto-descuento;
 			console.log (precioDescuento);
		}
		else
		{
			if (lamparascantidad == 3)
			{
				if (LaMarca == "ArgentinaLuz")
				{
					descuento=precioBruto*15/100;
 					precioDescuento = precioBruto-descuento;
 					console.log (precioDescuento);
				}if (LaMarca== "FelipeLamparas")
					{
						descuento=precioBruto*10/100;
 						precioDescuento = precioBruto-descuento;
 						console.log (precioDescuento);
					}
					else
					{
						descuento=precioBruto*5/100;
 						precioDescuento = precioBruto-descuento;
 						console.log (precioDescuento);
					}
					else
				{

					if (precioDescuento>120)
					{
						descuento = precioDescuento /100 * 10
						precioDescuento = precioDescuento + descuento

						alert ("IIBB Usted pago " + descuento + "siendo " +descuento+ "El precio que pago ");
					}
					else
					}

				}


			}

		}

 	}

 	 
 	{
 		
 	}


}
