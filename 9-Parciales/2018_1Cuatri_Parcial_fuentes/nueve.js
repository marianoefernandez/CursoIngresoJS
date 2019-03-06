function mostrar()
{
	var marca;
	var peso;
	var temperatura;
	var temperaturasPares = 0;
	var marcaProductoMasPesado;
	var cantidadProductosBajoCero = 0;
	var promedio;
	var sumaDePesos = 0;
	var cantidadProductos = 0;
	var pesoMaximo;
	var pesoMinimo;
	var continuar = true;
	var contador = 0;

	while (continuar == true)
	{
		do
		{
			marca = prompt ("Ingrese la marca del producto");

			if (isNaN (marca) == false) 
			{
				alert ("Por favor sólo utilice letras");
			}
		}while (isNaN (marca) == false);

		do
		{
			peso = prompt ("Ingrese el peso del producto (entre 1 a 100 kg)");
			peso = parseInt (peso);

			if (isNaN (peso) || peso > 100 || peso < 1) 
			{
				alert ("Por favor sólo ingrese un peso entre 1 a 100 kg");
			}
		}while (isNaN (peso) || peso > 100 || peso < 1);

		do
		{
			temperatura = prompt ("Ingrese la temperatura del producto (entre -30° a 30°)");
			temperatura = parseInt (temperatura);

			if (isNaN (temperatura) || temperatura > 30 || temperatura < (-30)) 
			{
				alert ("Por favor sólo ingrese una temperatura entre -30° a 30 °");
			}
		}while (isNaN (temperatura) || temperatura > 30 || temperatura < (-30));

		if (temperatura % 2 == 0 && temperatura != 0) 
		{
			temperaturasPares ++;
		}

		if (temperatura < 0) 
		{
			cantidadProductosBajoCero ++;
		}

		if (peso > 0) 
		{
			sumaDePesos = sumaDePesos + peso;
			cantidadProductos++;
		}

		if (contador == 0) 
		{
			pesoMinimo = peso;
			pesoMaximo = peso;
			marcaProductoMasPesado = marca;
		}
		else
		{
			if (pesoMaximo < peso) 
			{
				pesoMaximo = peso;
				marcaProductoMasPesado = marca;
			}
			else
			{
				if (pesoMinimo > peso) 
				{
					pesoMinimo = peso;
				}
			}
		}
	contador ++;
	continuar = confirm ("¿Desea continuar?");
	
	}

	promedio = sumaDePesos / cantidadProductos;

	document.write ("La cantidad de temperaturas pares es de: " + temperaturasPares + " pares");
	document.write ("<br>La marca del producto más pesado es: " + marcaProductoMasPesado);
	document.write ("<br>La cantidad de productos que se conservan a menos de 0 grados es de: " + cantidadProductosBajoCero);
	document.write ("<br>El promedio de todos los productos es de: " + promedio);
	document.write ("<br>El peso máximo es de " + pesoMaximo + " kg, y el peso minimo es: " + pesoMinimo + " kg"); 
}


//Realizar el algoritmo que permita ingresar la marca del producto,
// el peso el cual debe ser entre 1 y 100 (validar), la temperatura de almacenamiento(entre -30 y 30) 
//hasta que el usuario quiera e informar al terminar el ingreso por document.write: 
//a) La cantidad de temperaturas pares. b) La marca del producto más pesado 
//c) La cantidad de productos que se conservan a menos de 0 grados. 
//d) El promedio del peso de todos los productos.	f) El peso máximo y el mínimo.

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