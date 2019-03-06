function mostrar()
{
	var animal;
	var peso;
	var temperatura;
	var nombreAnimalMasPesado;
	var contador = 0;
	var temperaturasPares = 0;
	var animalMasPesado;
	var temperaturaAnimalMasPesado;
	var cantidadAnimalesBajoCero = 0;
	var sumaDePesos = 0;
	var cantidadAnimales = 0; 
	var promedio;
	var pesoMaximoBajoCero;
	var pesoMinimoBajoCero;
	var continuar = true;

	while (continuar == true)
	{
		do
		{
			animal = prompt ("Ingrese un nombre para el animal");

			if (isNaN (animal) == false)
			{
				alert ("Por favor sólo ingrese un nombre");
			}
		}while (isNaN (animal) == false);

		do
		{
			peso = prompt ("Ingrese un peso entre 1 kg y 1000 kg");
			peso = parseInt (peso);

			if (isNaN (peso) || peso < 1 || peso > 1000)
			{
				alert ("Por favor sólo ingrese un peso entre 1 kg y 1000 kg");
			}
		}while (isNaN (peso) || peso < 1 || peso > 1000);
		do
		{
			temperatura = prompt ("Ingrese una temperatura entre -30° y 30°");
			temperatura = parseInt (temperatura);

			if (isNaN (temperatura) || temperatura < (-30) || temperatura > 30)
			{
				alert ("Por favor sólo ingrese una temperatura entre -30° y 30°");
			}
		}while (isNaN (temperatura) || temperatura < (-30) || temperatura > 30);


		if (temperatura % 2 == 0 && temperatura != 0) 
		{
			cantidadPares ++;
		}

		if (contador == 0) 
		{	
			animalMasPesado = peso;
			nombreAnimalMasPesado = animal;
			temperaturaAnimalMasPesado = temperatura;
		}
		else
		{
			if (animalMasPesado < peso) 
			{
				animalMasPesado = peso;
				nombreAnimalMasPesado = nombre;
				temperaturaAnimalMasPesado = temperatura;
			}	
		}
			
		if (temperatura < 0) 
		{
			cantidadAnimalesBajoCero ++;
		}	

		if (peso > 0) 
		{
			sumaDePesos = sumaDePesos + peso;
			cantidadAnimales ++;
		}

		if (contador == 0 && temperatura < 0) 
		{
			pesoMaximoBajoCero = peso;
			pesoMaximoBajoCero = peso;
		}
		else
		{
			if (pesoMaximoBajoCero < peso) 
			{
				pesoMaximoBajoCero = peso;
			}
			else
			{
				if (pesoMinimoBajoCero > peso)
				{
					pesoMinimoBajoCero = peso;
				}

			}

		}
		contador = 1;
		continuar = confirm ("¿Desea continuar?");
	}
	promedio = sumaDePesos / cantidadAnimales;

	document.write ("La cantidad de temperaturas pares es de: " + temperaturasPares);
	document.write ("<br>El nombre del animal más pesado es: " + nombreAnimalMasPesado + " y su temperatura es de: " + temperaturaAnimalMasPesado + "°");
	document.write ("<br>La cantidad de animales que viven a menos de 0 grados es de: " + cantidadAnimalesBajoCero);
	document.write ("<br>El promedio de peso de los animales es de: " + promedio + " kilos");
	document.write ("<br>El peso máximo de los animales cuya temperatura es bajo cero es de : " + pesoMaximoBajoCero + " kilos. El peso minimo de los animales cuya temperatura es bajo cero es de: " + pesoMinimoBajoCero + " kilos");
}

//Realizar el algoritmo que permita ingresar el nombre de un animal del zoológico, 
//el peso el cual debe ser entre 1 y 1000 y 
//la temperatura del hábitat (entre -30 y 30) hasta que el usuario quiera e informar al terminar el ingreso
//por document.write: 
//a) La cantidad de temperaturas pares. b) El nombre y temperatura del animal más pesado 
//c) La cantidad de animales que viven a menos de 0 grados. d) El promedio del peso de todos los animales.	
//f) El peso máximo y el mínimo de todos los animales cuyas temperaturas sean bajo cero.

//Planteo del problema

//1- Variables de lo que necesito ingresar/mostrar (acumulador/contador/etc)
//2- {"Abro llave principal". While principal/continuar 
//3- do {prompt 
//4- while (error)
//5- do {prompt
//6- if (del error)
//7- while (error)
//8- if/else (de cada operación necesaria)
//9- Operaciones 
//10- continuar = confirm. Cierro la llave principal}
//11- Operaciones restantes
//12- Document.write
