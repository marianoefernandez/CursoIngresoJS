function mostrar()
{
//tomo la edad  
	var Edad;

	Edad = edad.value;
	Edad = parseInt (Edad);

	if (Edad> 17)
{
	alert ("Usted es mayor de edad");
}		

	if (Edad < 18 && Edad > 12)
{		
	
	alert ("Usted es un adolescente");
	
}

if (Edad< 13)
{
	alert ("Usted es un niño");
}		

}//FIN DE LA FUNCIÓN