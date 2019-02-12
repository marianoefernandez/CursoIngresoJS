function mostrar()
{
  	var precio;
	var recargo;
	var tarjeta;


  	//precio = ElPrecio.value;
  	//precio = parseInt (precio); 
  	precio = prompt ("Ingrese un precio ($) ","");
	precio = parseInt (precio);

  	recargo = (precio) * 10 / 100;

  	tarjeta = precio + recargo;

  	alert ("El precio de su producto en efectivo es de " +precio + " $ " + " Si lo paga con tarjeta se le cobra un 10% de recargo costandole " +tarjeta + " $" );
}
	//var precio;
	//var porcentaje;
	//var preciofinal;

	//precio = prompt ("Ingrese un precio inicial ($) ","");
	//precio = parseInt (precio);