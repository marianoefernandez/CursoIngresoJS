
function mostrar()
{
	var ancho;
	var largo;
	var perimetro;

	ancho = prompt ("Ingrese el ancho (m)" , "");
	ancho = parseInt (ancho);
	largo = prompt ("Ingrese el largo (m)" , "");
	largo = parseInt (largo);

	perimetro = (ancho + largo) * 2;

	alert ("El perimetro de este rectangulo es de: "+perimetro+ " metros");

}
