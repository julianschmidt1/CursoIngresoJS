function mostrar()
{
	var animal;
	var peso;
	var temperatura;
	var respuesta="si";
	var pares=0;
	var masPesado;
	var pesadoNombre;
	var pesadoTemperatura;
	var menosPesado;

	while(respuesta=="si")
	{
	animal=prompt("Ingrese un animal");
	respuesta=prompt("Si quiere continuar escriba LITERALMENTE si");

	while(isNaN(animal)==true)
	{
		peso=prompt("Ingrese la peso: ");
		peso=parseInt(peso);

		if (peso>=1 || peso<=1000) 
		{
			while(isNaN(peso)==false)
			{
				temperatura=prompt("Ingrese la temperatura del habitat: ");
				temperatura=parseInt(temperatura);
				if (temperatura>=-30 || temperatura<=30) 
				{
					while(isNaN(temperatura)==false)
					{
						temperatura=temperatura;
					}
				}
			}
		}
	}
		if (temperatura%2==0) //temperatura par
		{
			pares=pares++;
		}
		if (peso>masPesado) //mas pesado
		{
			masPesado=peso;
			pesadoTemperatura=temperatura;
			pesadoNombre=pesadoNombre;
		}
		if (temperatura<0) 
		{
			var masFrio=masFrio++;
		}
		var cantidad=cantidad++;
		var acumulador=acumulador+peso;

		if (temperatura<0) 
		{
			if (peso<menosPesado) 
			{
				menosPesado=peso;
			}
		}
	}
	alert("La cantidad de temperaturas pares es de: "+pares);
	alert("La cantidad de temperaturas pares es de: "+pares);
	alert("La cantidad de temperaturas pares es de: "+pares);
	alert("La cantidad de temperaturas pares es de: "+pares);
	alert("La cantidad de temperaturas pares es de: "+pares);
}
