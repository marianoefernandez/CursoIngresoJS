	function mostrar()
{
	var animal;
	var pesoAnimal;
	var temperaturaHabitat;
	var continuar=true;
	var cantidadTemperaturapares = 0;
	var contador = 0;
	var animalMasPesado;
	var temperaturaAnimalmasPesado;
	var cantidadAnimalesBajoCero = 0;
	var sumaPesoAnimales = 0;
	var	pesoAnimalMasPesadoBajoCero;
	var pesoAnimalMenosPesadoBajoCero;
	var cantidadAnimales = 0;
	var pesoAnimalMasPesado;

	while (continuar==true)
	 {
	 	do
	 	 {
	 	 	animal = prompt("Nombre del animal");
	 	 }while(isNaN(animal) == false);

	 	do
	 	 {
	 	 	pesoAnimal = prompt("Peso del animal (entre 1 y 1000 kg)");
	 	 	pesoAnimal = parseInt(pesoAnimal);

	 	 	if (isNaN(pesoAnimal) || pesoAnimal < 1 || pesoAnimal > 1000)
	 	 	 {
	 	 	 	alert("Ingrese solo un numero entre 1 y 1000 kg");
	 	 	 }
	 	 }while(isNaN(pesoAnimal) || pesoAnimal < 1 || pesoAnimal > 1000);

	 	do
	 	 {
	 	 	temperaturaHabitat = prompt("Temperatura del habitat del animal (Solo entre -30 y 30)");
	 	 	temperaturaHabitat = parseInt(temperaturaHabitat);

	 	 	if (isNaN(temperaturaHabitat) || temperaturaHabitat < (-30) || temperaturaHabitat > 30)
	 	 	 {
	 	 	 	alert("Ingrese solo un numero entre -30 y 30");
	 	 	 }
	 	 }while(isNaN(temperaturaHabitat) || temperaturaHabitat < (-30) || temperaturaHabitat > 30);

		if (temperaturaHabitat%2 == 0)
		 {
	 		cantidadTemperaturapares ++;
	 	 }

		if (contador == 0)
		 {
	 		animalMasPesado = animal;
	 		temperaturaAnimalmasPesado = temperaturaHabitat;
	 		pesoAnimalMasPesado = pesoAnimal;
		 }
		else
		 {
		 	if (pesoAnimalMasPesado < pesoAnimal)
		 	 {
		 	 	animalMasPesado = animal;
		 	 	temperaturaAnimalmasPesado = temperaturaHabitat;
		 	 }
		 }

		if (contador == 0 && temperaturaHabitat < 0)
		 {
	 		pesoAnimalMasPesadoBajoCero = pesoAnimal;
	 		pesoAnimalMenosPesadoBajoCero = pesoAnimal;
		 }

		if (contador != 0 && temperaturaHabitat < 0)
		 {
		 	if (pesoAnimalMasPesadoBajoCero < pesoAnimal)
		 	 {
		 	 	pesoAnimalMasPesadoBajoCero = pesoAnimal;
		 	 }
		 	if (pesoAnimalMenosPesadoBajoCero > pesoAnimal)
		 	 {
		 	 	pesoAnimalMenosPesadoBajoCero = pesoAnimal;
		 	 }
		 }

		if (temperaturaHabitat < 0)
		 {
		 	cantidadAnimalesBajoCero ++;
		 }

		cantidadAnimales ++;

		sumaPesoAnimales += pesoAnimal;

	 	contador = 1;

	 	continuar = confirm("¿Desea continuar?");
	 }

	promedioPesoAnimales= sumaPesoAnimales/cantidadAnimales;

	document.write("La Cantidad de temperaturas pares = " + cantidadTemperaturapares + " temperaturas son pares");
	document.write("<br>El animal mas pesado es " + animalMasPesado + " y vive a " + temperaturaAnimalmasPesado + "°");
	document.write("<br>Hay " + cantidadAnimalesBajoCero + " animales que viven a temperaturas bajo cero");
	document.write("<br>El promedio de peso de todos los animales es " + promedioPesoAnimales + " kg");
	document.write("<br>El animal que vive a temperatura bajo cero mas pesado pesa " + pesoAnimalMasPesadoBajoCero + " kg. Y el peso del animal que vive a temperatura bajo cero mas liviano es de " + pesoAnimalMenosPesadoBajoCero + " kg.");

}
