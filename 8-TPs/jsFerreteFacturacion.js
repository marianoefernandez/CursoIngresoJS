/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	var numero1;
	var numero2;
	var numero3;
	var sumar;

	numero1 = PrecioUno.value;
	numero1 = parseInt (numero1);
	numero2 = PrecioDos.value;
	numero2 = parseInt (numero2);
	numero3 = PrecioTres.value;
	numero3 = parseInt (numero3);

	sumar = (numero1 + numero2 + numero3);

	alert ("La suma es "+sumar);
}
function Promedio () 
{
	var numero1;
	var numero2;
	var numero3;
	var promedio;

	numero1 = PrecioUno.value;
	numero1 = parseInt (numero1);
	numero2 = PrecioDos.value;
	numero2 = parseInt (numero2);
	numero3 = PrecioTres.value;
	numero3 = parseInt (numero3);

	promedio = (numero1 + numero2 + numero3) / 3;

	alert ("El promedio es de "+promedio);
}
function PrecioFinal () 
{
	var numero1;
	var numero2;
	var numero3;
	var porcentaje;
	var preciofinal;

	numero1 = PrecioUno.value;
	numero1 = parseInt (numero1);
	numero2 = PrecioDos.value;
	numero2 = parseInt (numero2);
	numero3 = PrecioTres.value;
	numero3 = parseInt (numero3);

	porcentaje = (numero1 + numero2 + numero3) * (21) / (100) ;
	preciofinal = (numero1 + numero2 + numero3) + porcentaje;
	alert ("El precio final más IVA es de "+preciofinal);
}