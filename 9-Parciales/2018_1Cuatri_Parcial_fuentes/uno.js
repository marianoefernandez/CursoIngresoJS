
function mostrar()
{
	var persona1;
	var edad1;
	var persona2;
	var edad2;
	var sumaedades

	persona1 = prompt ("Ingrese un nombre " , "");
	edad1 = prompt ("Ingrese su edad " , "");
	edad1 = parseInt (edad1);

	persona2 = prompt ("Ingrese otro nombre " , "");
	edad2 = prompt ("Ingrese otra edad " , "");
	edad2 = parseInt (edad2);

	sumaedades = (edad1 + edad2);

	alert ("Ustedes son "+persona1+ " y " +persona2+ " y sus edades son " +edad1+ " y " +edad2+ " , y la suma de sus edades es " +sumaedades );
}
