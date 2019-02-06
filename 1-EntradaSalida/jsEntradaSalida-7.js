/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var numero1;
	var numero2;
	var sumar;

	numero1=numeroUno.value;
	numero1=parseInt (numero1);
	numero2=numeroDos.value;
	numero2=parseInt(numero2);

	sumar= numero1+numero2;

	alert ("la suma es "+sumar);
}

function restar()
{
	var numero1;
	var numero2;
	var restar;

	numero1=numeroUno.value;
	numero1=parseInt (numero1);
	numero2=numeroDos.value;
	numero2=parseInt(numero2);

	restar= numero1-numero2;

	alert ("la resta es "+restar);
}

function multiplicar()
{ 
	var numero1;
	var numero2;
	var multiplicar;

	numero1=numeroUno.value;
	numero1=parseInt (numero1);
	numero2=numeroDos.value;
	numero2=parseInt(numero2);

	multiplicar= numero1*numero2;

	alert ("la multiplicación es "+multiplicar);
}

function dividir()
{
	var numero1;
	var numero2;
	var dividir;

	numero1=numeroUno.value;
	numero1=parseInt (numero1);
	numero2=numeroDos.value;
	numero2=parseInt(numero2);

	dividir= numero1/numero2;

	alert ("la división es "+dividir);
}

