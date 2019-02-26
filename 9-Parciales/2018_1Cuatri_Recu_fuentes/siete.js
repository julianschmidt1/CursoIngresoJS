function mostrar()
{
	var sexo;
	var nota;
	var promedio;
	var baja;
	var cant;
	var acumulador=0;

	
	
	for(var i=0;i<5;i++)
	{
		nota=prompt("Ingrese la nota.");
		nota=parseInt(nota);
		acumulador=acumulador+nota;
		while(nota<0 || nota>10)
		{
		nota=prompt("Error. Ingrese la nota nuevamente.");
		i=i--;
		}

		sexo=prompt("Ingrese el sexo f o m.");
		while(sexo!="f" && sexo!="m")
		{
			sexo=prompt("Error. Ingrese el sexo nuevamente. (f o m)");
		}
	}

	alert(promedio=acumulador/5);

	if (baja>nota) 
	{
		
	}
}
