
function mostrar()
{
	var ancho;
	var largo;
	var perimetro;

	ancho = prompt ("Ingrese el ancho del rectangulo (m)","");
	ancho = parseInt (ancho);
	largo = prompt ("Ingrese el largo del rectangulo (m)","");
	largo = parseInt (largo);

	perimetro = (ancho + largo) * 2;

	alert ("El perimetro del rectangulo es de " + perimetro + " metros");	
}
