function mostrar()
{
	var nota;
	var sexo;
	var notaBaja=11;
	var sexoBajo;
	var cantidadVarones=0;
	var promedio=0;

	for(i=0;i<5;i++)
	{
		nota=prompt("Ingrese su nota: ");
		nota=parseInt(nota);
		while(isNaN(nota) || nota<1 || nota>10)
		{
			nota=prompt("Error, ingrese una nota valida: ");
			nota=parseInt(nota);
		}
		sexo=prompt("Ingrese el sexo: ");
		while(sexo!='f' && sexo!='m')
		{
			sexo=prompt("Error, ingrese un sexo valido: ");
		}
		promedio=promedio+nota; //sumar las notas para promediarlas

		if (nota<notaBaja) //Condicional para la nota baja y su sexo
		{
			notaBaja=nota;
			sexoBajo=sexo;
		}

		if (sexo=='m' && nota>=6) 
		{
			cantidadVarones=cantidadVarones+1;
		}
	}

	if (sexoBajo=='m') //defino masculino y femenino como bajos
		{
			sexoBajo="masculino";
		} else
		{
			sexoBajo="femenino";
		}

	promedio=promedio/5;

	alert("El promedio total de notas es: "+promedio);
	alert("La nota mas baja es "+notaBaja+" y su sexo es: "+sexoBajo);
	alert("La cantidad de varones cuya nota sea mayor o igual a 6 es de: "+cantidadVarones);
}