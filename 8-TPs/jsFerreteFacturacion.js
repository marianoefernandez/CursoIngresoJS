/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	var precio1;
	var precio2;
	var precio3;
	var suma;	

	precio1 = PrecioUno.value;
	precio1 = parseInt (precio1);
	precio2 = PrecioDos.value;
	precio2 = parseInt (precio2);
	precio3 = PrecioTres.value;
	precio3 = parseInt (precio3);

	suma = precio1 + precio2 + precio3;

	alert ("La suma es: " +suma);
}
function Promedio () 
{
	var precio1;
	var precio2;
	var precio3;
	var promedio;	

	precio1 = PrecioUno.value;
	precio1 = parseInt (precio1);
	precio2 = PrecioDos.value;
	precio2 = parseInt (precio2);
	precio3 = PrecioTres.value;
	precio3 = parseInt (precio3);

	promedio = (precio1 + precio2 + precio3) / 3;

	alert ("El promedio es: " +promedio);
}
function PrecioFinal () 
{
	var precio1;
	var precio2;
	var precio3;
	var precioFinal;	

	precio1 = PrecioUno.value;
	precio1 = parseInt (precio1);
	precio2 = PrecioDos.value;
	precio2 = parseInt (precio2);
	precio3 = PrecioTres.value;
	precio3 = parseInt (precio3);

	precioFinal = (precio1 + precio2 + precio3) + (precio1 + precio2 + precio3) / 100 * 21; 

	alert ("El precioFinal + 21% de IVA es : " + precioFinal);
}

//Planteo del Problema.

//1-Variables de lo que necesito y muesto
//2-variable = elId.value
//3-parseInt
//4-x3
//5-Operaciones de lo que necesito
//6-Alert