function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var random

	random=Math.floor((Math.random() * 10) + 1);

	if(random>=9)
	{
		alert("Te sacaste un "+random+". EXCELENTE.");
	} else
	{
		if(random>=4)
		{
			alert("Te sacaste un "+random+". APROBADO.");
		}
		else
		{
			alert("Te sacaste un "+random+". Vamos, la proxima se puede.");
		}
	}

}//FIN DE LA FUNCIÓN.