/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	var temperatura;
	var grados;

	temperatura = Temperatura.value;
	temperatura = parseInt (temperatura);

	grados = (temperatura - 32) * 5 / 9;
	
	alert (temperatura + "°F son " + grados + "° C");
}

function CentigradosFahrenheit () 
{
	var temperatura;
	var fahrenheit;

	temperatura = Temperatura.value;
	temperatura = parseInt (temperatura);

	fahrenheit = temperatura * 9 / 5 + (32);
	alert (temperatura + "°C son " + fahrenheit + "° F");
}
//Planteo del problema.

//1-variables que necesito usar y mostrar;
//2-variable = elId.value;
//3-operaciones
//4-alert (loquemuestro);