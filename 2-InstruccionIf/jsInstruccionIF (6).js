function mostrar()
{
//tomo la edad  
	var numero;

	numero=edad.value;
	numero=parseInt(numero);

	if (numero>=18) 
	{
		alert("La persona es mayor de edad.");
	}
	else {
		if(numero<18 && numero>=13){
			alert("La persona es adolescente.");
		}
		else{
			alert("La persona es un niño.");
		}
	}



}//FIN DE LA FUNCIÓN