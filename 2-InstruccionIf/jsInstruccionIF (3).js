function mostrar()
{
//tomo la edad  
	var numero;

	numero=edad.value;
	numero=parseInt(numero);

	if (numero >= 18) 
	{
		alert("La persona es mayor de edad.");
	}
	else
	{
		alert("La persona es menor de edad.");
	}

}//FIN DE LA FUNCIÓN