function mostrar()
{
//tomo la edad  
	var numero;

	numero=edad.value;
	numero=parseInt(numero);

	if(! (numero<18 && numero>13))
	{
		alert("La persona no es adolescente.");
	}
	/*if (numero>17)
	{
		alert("La persona no es adolescente.");
	}
	if (numero<13) 
	{
		alert("La persona no es adolescente.");
	}*/
}//FIN DE LA FUNCIÓN