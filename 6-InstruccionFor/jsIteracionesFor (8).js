function mostrar()
{
	var primo;
	var div=0;
	primo=prompt("Ingrese el numero deseado y se le dirá si es un numero primo o no:");
	primo=parseInt(primo);
	for(i=1;i<=primo;i++)
	{
		if (primo%i==0) 
		{
			div=div+1;
		}
	}

	if(div==2)
	{
		alert("El numero es primo.");
	} else
	{
		alert("El numero no es primo.");
	}
	
}//FIN DE LA FUNCIÓN