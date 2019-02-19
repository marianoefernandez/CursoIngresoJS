function mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;
var falta
var invierno
var paso 

falta = "Falta para el invierno."
invierno = "Abrigate que hace frio."
paso =  "Ya pasamos el frio, ahora calor!!!."

switch (mesDelAño)
{

	case "Enero":
		mesDelAño = falta;
		break;

	case "Febrero": 
		mesDelAño = falta;
		break;

	case "Marzo": 
		mesDelAño = falta;
		break;

	case "Abril": 
		mesDelAño = falta;
		break;

	case "Mayo": 
		mesDelAño = falta;
		break;	

	case "Junio": 
		mesDelAño = falta;
		break;

	//mensaje = "Abrigate que hace frio.";

	case "Julio":
		mesDelAño = invierno;
		break;

	case "Agosto":
		mesDelAño = invierno;
		break;	

	//mensaje = "Ya pasamos el frio, ahora calor!!!.";	

	case "Septiembre":
		mesDelAño = paso;
		break;	

	case "Octubre":
		mesDelAño = paso;;
		break;
	
	case "Noviembre":
		mesDelAño = paso;
		break;

	case "Diciembre":
		mesDelAño = paso;
		break;	
}

alert (mesDelAño);





}//FIN DE LA FUNCIÓN