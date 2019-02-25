function mostrar()
{
	var numeroI;
	var numAnt=0;
	var acumulador;

	numeroI=prompt("Ingrese un numero: ");
	numeroI=parseInt(numeroI);
	
	for(recorrido=numeroI-1;recorrido>1;recorrido--)
	{
		for(numAnt=numeroI-1;numAnt>1;numAnt--)
		{
		console.log(numAnt);
			if (numeroI%numAnt==0) 
			{
			acumulador=acumulador+numAnt;
			}
		}
		if (acumulador==numeroI) 
		{
		console.log("Numero perfecto.");
		}
	}
}




/*	
	{
	var numeroI;
	var numAnt=0;
	numeroI=parseInt(numeroI);
	numeroI=prompt("Ingrese un numero: ");
	for(numAnt=numeroI-1;numAnt>1;numAnt--)
	{
		console.log(numAnt);
		if (numeroI%numAnt==0) 
		{
			break;
		}
	}
	if (numAnt==1) 
	{
		console.log("primo");
	} else
	{
		console.log("noprimo");
	}*/